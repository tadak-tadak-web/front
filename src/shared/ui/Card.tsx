import clsx from "clsx";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={clsx("rounded-lg border bg-white p-4 shadow-sm", className)}
      {...props}
    />
  );
}
