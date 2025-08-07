import {
  AssignmentsItem,
  MaterialsItem,
  VideoItem,
} from '@/features/lecture-detail';

interface LectureItemListProps {
  videos: string[];
  assignments: string[];
  materials: string[];
} //각 아이템은 임시로 string[] type으로 설정

export default function LectureItemList({
  videos,
  assignments,
  materials,
}: LectureItemListProps) {
  return (
    <footer className="mt-12">
      <ul className="flex flex-col gap-4">
        {videos.map((video, index) => (
          <VideoItem key={`video-${index}`} title={video} isWatched />
        ))}
        {materials.map((material, index) => (
          <MaterialsItem key={`material-${index}`} title={material} />
        ))}
        {assignments.map((assignment, index) => (
          <AssignmentsItem key={`assignment-${index}`} title={assignment} />
        ))}
      </ul>
    </footer>
  );
}
