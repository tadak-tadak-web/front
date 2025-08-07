import {
  AnnouncementButton,
  QnAButton,
  NoteButton,
} from '@/features/lecture-detail';

export default function LectureNav() {
  return (
    <ul className="grid lg:grid-cols-[repeat(4,_160px)] grid-cols-[repeat(4,_minmax(0,_1fr))] justify-between mt-18 lg:w-4xl w-full lg:h-40 h-20 gap-5 lg:gap-0">
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
