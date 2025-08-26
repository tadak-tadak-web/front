import clsx from 'clsx';

interface CheckDuplicateButtonProps {
  isChecked: boolean;
  onClick: () => void;
}
export default function CheckDuplicateButton({
  onClick,
  isChecked,
}: CheckDuplicateButtonProps) {
  return (
    <button
      type="button"
      className={clsx(
        'absolute right-2 top-1/2 -translate-y-1/2 text-xs px-3.5 py-1.5 rounded-[8px] text-white',
        isChecked
          ? 'bg-green-500 cursor-not-allowed'
          : 'bg-[#FF7F50] cursor-pointer'
      )}
      onClick={isChecked ? undefined : onClick}
      disabled={isChecked}
    >
      {isChecked ? '확인 완료!' : '중복 확인'}
    </button>
  );
}
