interface RegisterButtonProps {
  onClick: () => void;
}

export default function RegisterButton({ onClick }: RegisterButtonProps) {
  return (
    <button
      onClick={onClick}
      className="shadow-2xl w-full h-[55px] bg-gradient-to-r from-[#D2886F] to-[#D4B896] text-white font-bold py-2 px-4 rounded-[10px] cursor-pointer"
    >
      회원가입
    </button>
  );
}
