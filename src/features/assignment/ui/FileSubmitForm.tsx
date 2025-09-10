import { createAssignment } from '@/entities/assignment';
import { DropZone } from '@/features/assignment';
import { useMutation } from '@tanstack/react-query';

export default function FileSubmitForm() {
  const { mutate } = useMutation({
    mutationFn: createAssignment,
  });

  const handleUpload = (files: FileList) => {
    for (const file of files) {
      mutate(file);
    }
  };

  return (
    <form>
      <div className="mb-6">
        <label className="block text-sm font-bold text-gray-700 mb-2">
          파일 업로드
        </label>
        <DropZone onFilesSelected={handleUpload} />
      </div>
    </form>
  );
}
