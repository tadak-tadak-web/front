interface InputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export default function IdInput({ onChange, value }: InputProps) {
  return (
    <>
      <div className="relative w-full">
        <input
          required
          type="text"
          autoComplete="username"
          id="id"
          value={value}
          onChange={onChange}
          className="border w-full  border-[#BEB8B8] rounded-[10px] focus:outline-none p-3.5"
        />
      </div>
    </>
  );
}
