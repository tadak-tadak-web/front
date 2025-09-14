import {
  BookOpenIcon,
  Cog6ToothIcon,
  ClipboardDocumentListIcon,
  AcademicCapIcon,
  DocumentCheckIcon,
  PencilSquareIcon,
} from '@heroicons/react/24/outline';

export const PAGES = [
  {
    key: 'home',
    label: '내 강의실',
    path: '/',
    icon: BookOpenIcon,
  },
  {
    key: 'enrollment',
    label: '수강 신청',
    path: '/enrollment',
    icon: PencilSquareIcon,
  },
  {
    key: 'settings',
    label: '환경 설정',
    path: '/settings',
    icon: Cog6ToothIcon,
  },
] as const;

export const ICON_MAP = {
  '진행한 강의': BookOpenIcon,
  '완료한 강의': ClipboardDocumentListIcon,
  '학습 시간': AcademicCapIcon,
  '제출한 과제': DocumentCheckIcon,
} as const;

export type KpiIconMap = keyof typeof ICON_MAP;
