import type { LectureItem } from '@/entities/lecture';
import {
  AssignmentsItem,
  MaterialsItem,
  VideoItem,
} from '@/features/lecture-detail';

interface LectureItemListProps {
  videos: LectureItem[];
  assignments: LectureItem[];
  materials: LectureItem[];
}

export default function LectureItemList({
  videos,
  assignments,
  materials,
}: LectureItemListProps) {
  return (
    <footer className="mt-5 lg:mt-12">
      <ul className="flex flex-col gap-4">
        {videos.map((video, index) => (
          <VideoItem
            key={`video-${index}`}
            title={video.title}
            isWatched={video.completed}
          />
        ))}
        {materials.map((material, index) => (
          <MaterialsItem key={`material-${index}`} title={material.title} />
        ))}
        {assignments.map((assignment, index) => (
          <AssignmentsItem
            key={`assignment-${index}`}
            title={assignment.title}
          />
        ))}
      </ul>
    </footer>
  );
}
