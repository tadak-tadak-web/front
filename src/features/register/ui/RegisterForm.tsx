import { IdInput, PasswordInput, RegisterButton } from '@/features/register';
import { useRegister } from '@/features/register/model';
import { useState } from 'react';

export default function RegisterForm() {
  const { handleMutate } = useRegister();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');

  return (
    <form className="flex flex-col">
      <IdInput onChange={e => setId(e.target.value)} value={id} />
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
      <div className="mt-15" />
      <RegisterButton onClick={() => handleMutate({ id, password })} />
    </form>
  );
}
