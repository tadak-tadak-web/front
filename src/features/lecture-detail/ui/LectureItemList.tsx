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
          <li key={`video-${index}`}>{video}</li>
        ))}
        {assignments.map((assignment, index) => (
          <li key={`assignment-${index}`}>{assignment}</li>
        ))}
        {materials.map((material, index) => (
          <li key={`material-${index}`}>{material}</li>
        ))}
      </ul>
    </footer>
  );
}
