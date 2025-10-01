import { useMutation } from '@tanstack/react-query';
import type { Editor } from '@tiptap/react';
import { createFile } from '@/entities/board';

interface UseTiptapFileUploadProps {
  editor: Editor | null;
}

export const useTiptapFileUpload = ({ editor }: UseTiptapFileUploadProps) => {
  const mutation = useMutation({
    mutationFn: createFile,
    onSuccess: (data, variables) => {
      if (!editor) return;

      const { url } = data;
      const file = variables;

      if (file.type.startsWith('image/')) {
        editor.chain().focus().setImage({ src: url }).run();
      } else {
        editor
          .chain()
          .focus()
          .insertContent(
            `<a href="${url}" download="${file.name}">${file.name}</a>`
          )
          .run();
      }
    },
    onError: error => {
      console.error('파일 업로드 실패:', error);
      alert('파일 업로드에 실패했습니다.');
    },
  });

  const handleFileSelect = (accept: string) => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', accept);
    input.click();

    input.onchange = () => {
      const file = input.files?.[0];
      if (file) {
        mutation.mutate(file);
      }
    };
  };

  return {
    uploadImage: () => handleFileSelect('image/*'),
    uploadFile: () => handleFileSelect('*/*'),
    isUploading: mutation.isPending,
  };
};
