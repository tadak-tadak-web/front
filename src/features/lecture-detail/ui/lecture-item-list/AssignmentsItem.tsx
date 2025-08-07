export default function AssignmentsItem({ title }: { title: string }) {
  return (
    <li className="flex items-center text-gray-500 text-lg">
      <AssignmentsIcon />
      <h3 className="pl-5">{title}</h3>
    </li>
  );
}

function AssignmentsIcon() {
  return (
    <div className="size-10 lg:size-15 flex items-center justify-center rounded-[10px] bg-[#FFB2B2]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-1/2 text-[#FF0000]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
        />
      </svg>
    </div>
  );
}
