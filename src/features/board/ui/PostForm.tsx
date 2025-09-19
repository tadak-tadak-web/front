import { boardQueries, createPost } from '@/entities/board';
import Editor from '@/features/board/ui/Editor';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import 'react-quill-new/dist/quill.snow.css';
export default function PostForm() {
  const [content, setContent] = useState('');
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: boardQueries.postList().queryKey,
      });
    },
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(content);
    setContent('');
  };

  return (
    <form
      className="bg-white rounded-xl shadow-md p-4 mb-6"
      onSubmit={handleSubmit}
    >
      <Editor value={content} onChange={setContent} />
      <div className="flex justify-between items-center mt-2">
        <div className="flex items-center gap-1 text-gray-500"></div>
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-5 rounded-lg hover:bg-blue-600 transition-colors"
        >
          업로드
        </button>
      </div>
    </form>
  );
}
