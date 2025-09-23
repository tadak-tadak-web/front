import type { Syllabus } from '@/entities/enrollment';
import PdfViewer from './PdfViewer';

export default function SyllabusViewer({ syllabus }: { syllabus: Syllabus }) {
  if (!syllabus?.fileUrl) {
    return <p>강의 계획서 파일이 없습니다.</p>;
  }

  if (syllabus.fileType === 'image') {
    return (
      <div className="flex justify-center my-10">
        <img
          src={syllabus.fileUrl}
          alt="강의 계획서"
          className="max-w-full h-auto border rounded-md"
        />
      </div>
    );
  }

  return <PdfViewer fileUrl={syllabus.fileUrl} />;
}
