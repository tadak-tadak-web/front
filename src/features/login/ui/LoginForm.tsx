import {
  LoginButton,
  AutoLoginToggle,
  FindPasswordButton,
  GoToRegisterLink,
  PasswordInput,
  IdInput,
  useLogin,
} from '@features/login';
import { useState } from 'react';

export default function LoginForm() {
  const { mutate } = useLogin();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate({ id, password });
  };

  return (
    <form className="flex flex-col w-full">
      <IdInput onChange={(e) => setId(e.target.value)} value={id} />
      <div className="mt-9" />
      <PasswordInput
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <div className="flex justify-between items-center mt-8 mb-18">
        <AutoLoginToggle />
        <FindPasswordButton />
      </div>
      <LoginButton onClick={handleSubmit} />
      <div className="mt-5.5 flex justify-center">
        <GoToRegisterLink />
      </div>
    </form>
  );
}
