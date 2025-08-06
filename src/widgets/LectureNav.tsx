import {
  AnnouncementButton,
  QnAButton,
  NoteButton,
} from '@/features/lecture-detail';

export default function LectureNav() {
  return (
    <ul className="flex mt-18 gap-7">
      <li>
        <AnnouncementButton />
      </li>
      <li>
        <QnAButton />
      </li>
      <li>
        <NoteButton />
      </li>
      <li>
        <NoteButton />
      </li>
    </ul>
  );
}
