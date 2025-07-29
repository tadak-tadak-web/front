import { IdInput, PasswordInput } from '@/features/auth';
import {
  LoginButton,
  AutoLoginToggle,
  FindPasswordButton,
  GoToRegisterLink,
} from '@features/login';

export default function LoginForm() {
  return (
    <form className="flex flex-col w-full">
      <IdInput onChange={() => {}} value="" />
      <div className="mt-9" />
      <PasswordInput onChange={() => {}} value="" />
      <div className="flex justify-between items-center mt-8 mb-18">
        <AutoLoginToggle />
        <FindPasswordButton />
      </div>
      <LoginButton />
      <div className="mt-5.5 flex justify-center">
        <GoToRegisterLink />
      </div>
    </form>
  );
}
