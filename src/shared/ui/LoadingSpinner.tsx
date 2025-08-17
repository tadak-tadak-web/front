interface LoadingSpinnerProps {
  className?: string;
}

export default function LoadingSpinner({
  className = '',
}: LoadingSpinnerProps) {
  return (
    <div className={className}>
      <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}
