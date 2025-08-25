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
        'absolute right-2 top-1/2 -translate-y-1/2 bg-[#FF7F50] text-xs px-3.5 py-1.5 rounded-[8px] cursor-pointer text-white',
        {
          'bg-green-500': isChecked,
        },
      )}
      onClick={onClick}
    >
      {isChecked ? '확인 완료!' : '중복 확인'}
    </button>
  );
}
