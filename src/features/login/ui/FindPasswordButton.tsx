import { Link } from 'react-router-dom';

export default function FindPasswordButton() {
  return (
    <Link to="/find-password" className="text-[#ADD8E6] text-lg">
      비밀번호 찾기
    </Link>
  );
}
