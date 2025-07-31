import { Link } from 'react-router-dom';

export default function GoToRegisterLink() {
  return (
    <span className="text-xl text-black">
      계정이 없으신가요?
      <Link to="/register" className="text-[#ADD8E6] text-xl">
        회원가입
      </Link>
    </span>
  );
}
