import { DropZone } from '@/features/assignment';

interface FileSubmitFormProps {
  handleUpload: (files: FileList) => void;
}
export default function FileSubmitForm({ handleUpload }: FileSubmitFormProps) {
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
