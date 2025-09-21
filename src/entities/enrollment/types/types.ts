export interface Enrollment {
  id: number;
  imageUrl: string;
  title: string;
  professor: string;
  syllabus: {
    fileUrl: string;
    fileType: 'pdf' | 'image';
  };
}
