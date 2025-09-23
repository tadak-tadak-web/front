export interface Syllabus {
  fileUrl: string;
  fileType: 'pdf' | 'image';
}

export interface Enrollment {
  id: number;
  imageUrl: string;
  title: string;
  professor: string;
  syllabus: Syllabus;
}
