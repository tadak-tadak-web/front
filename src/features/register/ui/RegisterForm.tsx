import {
  CheckDuplicateButton,
  PasswordInput,
  PasswordMatchMessage,
  useCheckId,
  useRegister,
} from '@features/register';
import { useState } from 'react';

export default function RegisterForm() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');

  const { register } = useRegister();
  const { checkId, data: checkIdData } = useCheckId();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!checkIdData?.status) {
      alert('중복 확인을 진행해주세요');
      return;
    }

    register({ id, password });
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label htmlFor="id" className="text-xl">
          아이디
        </label>
        <div className="relative w-full">
          <div className="relative w-full">
            <input
              required
              type="text"
              disabled={checkIdData?.status}
              autoComplete="username"
              id="id"
              value={id}
              onChange={e => setId(e.target.value)}
              className="border w-full  border-[#BEB8B8] rounded-[10px] focus:outline-none p-3.5"
            />
          </div>
          <CheckDuplicateButton
            onClick={() => checkId(id)}
            isChecked={!!checkIdData?.status}
          />
        </div>
      </div>
      <div className="mt-9" />
      <PasswordInput
        label="비밀번호"
        onChange={e => setPassword(e.target.value)}
        value={password}
        hint="* 영문자, 숫자 포함 8~20 자리"
      />
      <div className="mt-8" />
      <PasswordInput
        label="비밀번호 확인"
        onChange={e => setCheckPassword(e.target.value)}
        value={checkPassword}
      />
      <PasswordMatchMessage password={password} checkPassword={checkPassword} />
      <div className="mt-15" />
      <button
        type="submit"
        className="shadow-2xl w-full h-[55px] bg-gradient-to-r from-[#D2886F] to-[#D4B896] text-white font-bold py-2 px-4 rounded-[10px] cursor-pointer"
      >
        회원가입
      </button>
    </form>
  );
}
