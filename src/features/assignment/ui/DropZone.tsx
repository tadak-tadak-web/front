// src/components/DropZone.tsx
import { ArrowUpTrayIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { useState } from 'react';

const preventDefaults = (fn: (e: React.DragEvent<HTMLDivElement>) => void) => {
  return (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    fn(e);
  };
};

interface DropZoneProps {
  onFilesSelected: (files: FileList) => void;
}

export default function DropZone({ onFilesSelected }: DropZoneProps) {
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const handleDragEnter = preventDefaults(() => setIsDragging(true));
  const handleDragLeave = preventDefaults(() => setIsDragging(false));
  const handleDragOver = preventDefaults(() => {
    if (!isDragging) setIsDragging(true);
  });
  const handleDrop = preventDefaults(e => {
    setIsDragging(false);
    onFilesSelected(e.dataTransfer.files);
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      onFilesSelected(e.target.files);
    }
  };

  return (
    <div
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className={clsx(
        `mt-1 flex justify-center items-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md cursor-pointer relative`,
        isDragging ? 'border-blue-400 bg-blue-50' : 'border-gray-300'
      )}
    >
      <input
        id="file-upload"
        name="file-upload"
        type="file"
        multiple
        onChange={handleFileChange}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      />
      <div className="space-y-1 text-center">
        <ArrowUpTrayIcon className="mx-auto h-12 w-12 text-gray-400" />
        <div className="flex text-sm text-gray-600">
          <label
            htmlFor="file-upload"
            className="relative font-medium text-blue-600"
          >
            <span>파일 선택</span>
          </label>
          <p className="pl-1">또는 파일을 드래그하세요.</p>
        </div>
      </div>
    </div>
  );
}
