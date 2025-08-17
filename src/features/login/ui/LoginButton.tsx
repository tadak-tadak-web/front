interface LoginButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function LoginButton({ onClick }: LoginButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="shadow-2xl w-full h-[55px] bg-gradient-to-r from-[#D2886F] to-[#D4B896] text-white font-bold py-2 px-4 rounded-[10px] cursor-pointer"
    >
      로그인
    </button>
  );
}
