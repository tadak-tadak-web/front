// src/components/AddFileButton.tsx
import { useRef } from 'react';

interface AddFileButtonProps {
  onFilesSelected: (files: FileList) => void;
}

export default function AddFileButton({ onFilesSelected }: AddFileButtonProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      onFilesSelected(e.target.files);
      e.target.value = '';
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleButtonClick}
        className="justify-center py-2 px-4 text-white border-blue-300 border-b-4 shadow-sky-950 shadow- text-sm font-medium rounded-md  bg-primary-blue
                            hover:bg-secondary-blue  focus:outline-none hover:border-secondary-blue mb-4 md:mb-0"
      >
        파일 추가
      </button>
      <input
        ref={fileInputRef}
        type="file"
        multiple
        className="hidden"
        onChange={handleFileChange}
      />
    </>
  );
}
