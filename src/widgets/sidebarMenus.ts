import {
  BookOpenIcon,
  CalendarDaysIcon,
  ChartBarIcon,
  UserGroupIcon,
  TrophyIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

export const sidebarMenus = [
  { key: "home", label: "내 강의실", path: "/", icon: BookOpenIcon },
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
