import { createAssignment } from '@/entities/assignment';
import { DropZone } from '@/features/assignment';
import { useMutation } from '@tanstack/react-query';

export default function FileSubmitForm() {
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

  return (
    <form>
      <div className="mb-6">
        <label className="block text-sm font-bold text-gray-700 mb-2">
          파일 업로드
        </label>
        <DropZone
          onFilesSelected={files => {
            for (const file of files) {
              console.log(file);
              mutate(file);
            }
          }}
        />
      </div>
    </form>
  );
}
