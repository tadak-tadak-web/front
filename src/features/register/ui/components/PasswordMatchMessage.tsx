interface PasswordMatchMessageProps {
  password: string;
  checkPassword: string;
}

export default function PasswordMatchMessage({
  password,
  checkPassword,
}: PasswordMatchMessageProps) {
  if (!checkPassword) {
    return (
      <p className="mt-2 text-sm opacity-0 select-none">
        - 비밀번호가 일치하지 않습니다.
      </p>
    );
  }
  if (password !== checkPassword) {
    return (
      <p className="mt-2 text-red-500 text-sm">- 비밀번호가 일치하지 않습니다.</p>
    );
  }
  return <p className="mt-2 text-green-500 text-sm">- 비밀번호가 일치합니다.</p>;
}
