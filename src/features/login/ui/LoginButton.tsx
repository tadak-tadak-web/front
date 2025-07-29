export default function LoginButton() {
  const handleOnClick = () => {
    console.log('로그인 버튼 클릭');
  };

  return (
    <button
      onClick={handleOnClick}
      className="w-full h-[55px] bg-gradient-to-r from-[#D2886F] to-[#D4B896] text-white font-bold py-2 px-4 rounded-[10px] cursor-pointer"
    >
      로그인
    </button>
  );
}
