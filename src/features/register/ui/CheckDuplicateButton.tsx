interface CheckDuplicateButtonProps {
  onClick: () => void;
}
export default function CheckDuplicateButton({
  onClick,
}: CheckDuplicateButtonProps) {
  return (
    <button
      type="button"
      className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#FF7F50] text-black text-xs px-3.5 py-1.5 rounded-[8px]"
      onClick={onClick}
    >
      중복 확인
    </button>
  );
}
