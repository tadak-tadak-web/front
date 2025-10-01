import { boardQueries, createPost } from '@/entities/board';
import { useAuth } from '@/entities/user/hooks/useAuth';
import Editor from '@/features/board/ui/Editor';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
export default function PostForm() {
  const [content, setContent] = useState('');
  const user = useAuth();
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
    mutate({ content, authorId: user.id, author: user.nickname });
    setContent('');
  };

  return (
    <form
      className="bg-white rounded-xl shadow-md p-4 mb-6"
      onSubmit={handleSubmit}
    >
      <Editor value={content} onChange={setContent} isEditable />
    </form>
  );
}
