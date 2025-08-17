export interface Course {
  id: number;
  title: string;
  instructor: string;
  category: string;
  progress: number;
  currentLecture: number;
  totalLecture: number;
  nextLectureTitle: string;
  thumbnailUrl: string;
}
