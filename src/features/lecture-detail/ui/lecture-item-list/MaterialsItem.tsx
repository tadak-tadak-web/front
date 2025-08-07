export default function MaterialsItem({ title }: { title: string }) {
  return (
    <li className="flex items-center text-gray-500 text-lg">
      <MaterialsIcon />
      <h3 className="pl-5">{title}</h3>
    </li>
  );
}

function MaterialsIcon() {
  return (
    <div className="size-10 lg:size-15 flex items-center justify-center rounded-[10px] bg-[#00A5D4]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-1/2 text-[#195BB2]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m9 13.5 3 3m0 0 3-3m-3 3v-6m1.06-4.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
        />
      </svg>
    </div>
  );
}
