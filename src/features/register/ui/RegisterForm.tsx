import { IdInput, PasswordInput, RegisterButton } from '@/features/register';

export default function RegisterForm() {
  return (
    <form className="flex flex-col">
      <IdInput onChange={() => {}} value={''} />
      <div className="mt-9" />
      <PasswordInput
        label="비밀번호"
        onChange={() => {}}
        value={''}
        hint="* 영문자, 숫자 포함 8~ 20 자리"
      />
      <div className="mt-8" />
      <PasswordInput label="비밀번호 확인" onChange={() => {}} value={''} />
      <div className="mt-15" />
      <RegisterButton />
    </form>
  );
}
