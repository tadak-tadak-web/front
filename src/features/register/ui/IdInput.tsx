import CheckDuplicateButton from '@/features/register/ui/CheckDuplicateButton';

interface InputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export default function IdInput({ onChange, value }: InputProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor="id" className="text-xl">
        아이디
      </label>
      <div className="relative w-full">
        <input
          type="text"
          id="id"
          value={value}
          onChange={onChange}
          className="border w-full  border-[#BEB8B8] rounded-[10px] focus:outline-none p-3.5"
        />
        <CheckDuplicateButton value={value} />
      </div>
    </div>
  );
}
