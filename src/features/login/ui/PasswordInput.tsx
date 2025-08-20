import { useState } from 'react';

interface PasswordInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  className?: string;
}

export default function PasswordInput({
  onChange,
  value,
  className,
}: PasswordInputProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <label htmlFor="password" className="text-xl">
        비밀번호
      </label>
      <div className="relative">
        <input
          type={visible ? 'text' : 'password'}
          id="password"
          className="w-full border border-[#BEB8B8] rounded-[10px] focus:outline-none p-3.5 pr-12"
          placeholder="비밀번호를 입력하세요"
          onChange={onChange}
          value={value}
        />
        <button
          type="button"
          onClick={() => setVisible(v => !v)}
          className="absolute right-3 top-1/2 -translate-y-1/2"
        >
          <img
            src={visible ? '/visibility.webp' : '/visibility_off.webp'}
            alt="비밀번호 표시 토글"
            className="w-5 h-5"
          />
        </button>
      </div>
    </div>
  );
}
