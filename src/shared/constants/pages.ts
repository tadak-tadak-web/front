import {
  BookOpenIcon,
  CalendarDaysIcon,
  ChartBarIcon,
  UserGroupIcon,
  TrophyIcon,
  Cog6ToothIcon,
  ClipboardDocumentListIcon,
  AcademicCapIcon,
  DocumentCheckIcon,
} from "@heroicons/react/24/outline";

export const PAGES = [
  {
    key: "home",
    label: "내 강의실",
    path: "/",
    icon: BookOpenIcon,
  },
  {
    key: "schedule",
    label: "학습 일정",
    path: "/schedule",
    icon: CalendarDaysIcon,
  },
  {
    key: "progress",
    label: "진행 상황",
    path: "/progress",
    icon: ChartBarIcon,
  },
  {
    key: "instructors",
    label: "강사 목록",
    path: "/instructors",
    icon: UserGroupIcon,
  },
  {
    key: "achievements",
    label: "성취 목록",
    path: "/achievements",
    icon: TrophyIcon,
  },
  {
    key: "settings",
    label: "환경 설정",
    path: "/settings",
    icon: Cog6ToothIcon,
  },
] as const;

export const ICON_MAP = {
  "진행한 강의": BookOpenIcon,
  "완료한 강의": ClipboardDocumentListIcon,
  "학습 시간": AcademicCapIcon,
  "제출한 과제": DocumentCheckIcon,
} as const;

export type KpiIconMap = keyof typeof ICON_MAP;
