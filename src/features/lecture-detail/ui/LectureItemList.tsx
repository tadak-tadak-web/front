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
        {videos.map(video => (
          <VideoItem
            key={video.id}
            title={video.title}
            isWatched={video.completed}
          />
        ))}
        {materials.map(material => (
          <MaterialsItem key={material.id} title={material.title} />
        ))}
        {assignments.map(assignment => (
          <AssignmentsItem
            key={assignment.id}
            title={assignment.title}
            assignmentId={assignment.id}
          />
        ))}
      </ul>
    </footer>
  );
}
