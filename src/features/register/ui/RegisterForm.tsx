import {
  CheckDuplicateButton,
  IdInput,
  PasswordInput,
  RegisterButton,
} from '@/features/register';
import { useCheckId, useRegister } from '@/features/register/model';
import { useState } from 'react';

export default function RegisterForm() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');

  const { onSubmit } = useRegister();
  const { handleCheckId, data: checkIdData } = useCheckId();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ id, password });
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label htmlFor="id" className="text-xl">
          아이디
        </label>
        <div className="relative w-full">
          <IdInput onChange={e => setId(e.target.value)} value={id} />
          <CheckDuplicateButton
            onClick={() => handleCheckId(id)}
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
      <span>
        {checkPassword === password ? '일치합니다' : '일치하지 않습니다'}
      </span>
      <div className="mt-15" />
      <RegisterButton onClick={() => onSubmit({ id, password })} />
    </form>
  );
}
