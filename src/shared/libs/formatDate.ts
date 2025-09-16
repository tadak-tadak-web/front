import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';

dayjs.extend(relativeTime);
dayjs.locale('ko');

export const formatRelativeTime = (
  createdAt: string,
  updatedAt: string
): string => {
  const created = dayjs(createdAt);
  const updated = dayjs(updatedAt);

  const wasUpdated = updated.diff(created, 'second') > 1;
  const targetDate = wasUpdated ? updated : created;
  const formattedTime = targetDate.fromNow();

  return wasUpdated ? `${formattedTime} (수정됨)` : formattedTime;
};
