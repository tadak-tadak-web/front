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
    <footer>
      <ul>
        {videos.map((video, index) => (
          <VideoItem key={`video-${index}`} title={video} />
        ))}
        {assignments.map((assignment, index) => (
          <AssignmentsItem key={`assignment-${index}`} title={assignment} />
        ))}
        {materials.map((material, index) => (
          <MaterialsItem key={`material-${index}`} title={material} />
        ))}
      </ul>
    </footer>
  );
}
