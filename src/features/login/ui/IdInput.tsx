interface InputProps {
  onChange: () => void;
  value: string;
}

export default function IdInput({ onChange, value }: InputProps) {
  return (
    <>
      <label htmlFor="id" className="text-xl">
        아이디
      </label>
      <input
        type="text"
        id="id"
        className="border border-[#BEB8B8] rounded-[10px] focus:outline-none p-3.5"
        placeholder="아이디를 입력하세요"
        onChange={onChange}
        value={value}
      />
    </>
  );
}
