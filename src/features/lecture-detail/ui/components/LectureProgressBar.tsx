interface LectureProgressBarProps {
  progress: number; // 0~100
}

export default function LectureProgressBar({
  progress,
}: LectureProgressBarProps) {
  return (
    <div className="w-full h-2.5 bg-[#D9D9D9] rounded-full overflow-hidden">
      <div
        className="h-full bg-[#FFF6A1] transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
