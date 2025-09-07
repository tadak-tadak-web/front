export type LectureItemType = 'video' | 'material' | 'assignment';

export interface LectureItem {
  id: number;
  type: LectureItemType;
  title: string;
  completed: boolean;
}

export type LectureItemsByType = {
  videos: LectureItem[];
  materials: LectureItem[];
  assignments: LectureItem[];
};

export interface Lecture {
  id: number;
  week: number;
  title: string;
  thumbnailUrl: string;
  progress: number;
  stats: {
    videos: number;
    assignments: number;
    materials: number;
  };
  itemsByType: LectureItemsByType;
}
