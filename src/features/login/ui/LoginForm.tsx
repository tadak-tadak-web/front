import {
  LoginButton,
  IdInput,
  PasswordInput,
  AutoLoginToggle,
  FindPasswordButton,
} from '@features/login';

export default function LoginForm() {
  return (
    <form className="flex flex-col w-[360px] ">
      <IdInput onChange={() => {}} value="" />
      <div className="mt-9" />
      <PasswordInput onChange={() => {}} value="" />
      <div className="flex justify-between items-center mt-8 mb-18">
        <AutoLoginToggle />
        <FindPasswordButton />
      </div>
      <LoginButton />
    </form>
  );
}
