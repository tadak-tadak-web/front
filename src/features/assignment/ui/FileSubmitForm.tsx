import { createAssignment } from '@/entities/assignment';
import { AddFileButton } from '@/features/assignment';
import { ArrowUpTrayIcon } from '@heroicons/react/24/outline';
import { useMutation } from '@tanstack/react-query';
import clsx from 'clsx';
import { useState } from 'react';
const preventDefaults = (
  callback: (e: React.DragEvent<HTMLDivElement>) => void
) => {
  return (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    callback(e);
  };
};
export default function FileSubmitForm() {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const { mutate } = useMutation({
    mutationFn: createAssignment,
    onSuccess: data => {
      console.log('업로드 성공:', data);
    },
    onError: error => {
      console.error('업로드 실패:', error);
      alert('파일 업로드에 실패했습니다.');
    },
  });

  const handleDragEnter = preventDefaults(() => {
    setIsDragging(true);
  });

  const handleDragLeave = preventDefaults(() => {
    setIsDragging(false);
  });

  const handleDragOver = preventDefaults(() => {
    if (!isDragging) {
      setIsDragging(true);
    }
  });

  const handleDrop = preventDefaults(e => {
    setIsDragging(false);
    for (const file of e.dataTransfer.files) {
      mutate(file);
    }
    console.log(e.dataTransfer.files);
  });

  return (
    <form>
      <div className="mb-6">
        <label className="block text-sm font-bold text-gray-700 mb-2">
          파일 업로드
        </label>
        <div
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className={clsx(
            `mt-1 flex justify-center items-center px-6 pt-5 pb-6 border-2  border-dashed rounded-md
                          cursor-pointer relative`,
            isDragging ? 'border-blue-200 bg-blue-50' : 'border-gray-300 '
          )}
        >
          <input
            id="file-upload"
            name="file-upload"
            type="file"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <div className="space-y-1 text-center">
            <ArrowUpTrayIcon className="mx-auto h-12 w-12 text-gray-400" />
            <div className="flex text-sm text-gray-600">
              <label
                htmlFor="file-upload"
                className="relative  font-medium text-blue-600"
              >
                <span>파일 선택</span>
              </label>
              <p className="pl-1">또는 파일을 드래그하세요.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <AddFileButton
          onFilesSelected={file => {
            console.log(file);
          }}
        ></AddFileButton>
        <div className="flex items-center">
          <label
            htmlFor="score"
            className="block text-sm font-medium text-gray-700 mr-2"
          >
            점수
          </label>
          <input
            type="text"
            name="score"
            id="score"
            readOnly
            className="block w-20 rounded-md border-gray-300 shadow-sm sm:text-sm p-2"
          />
        </div>
      </div>
    </form>
  );
}
