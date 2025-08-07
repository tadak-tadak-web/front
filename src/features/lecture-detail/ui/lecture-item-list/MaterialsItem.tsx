import { FolderArrowDownIcon } from '@heroicons/react/24/outline';

export default function MaterialsItem({ title }: { title: string }) {
  return (
    <li className="flex items-center text-gray-500 text-lg">
      <div className="size-10 lg:size-15 flex items-center justify-center rounded-[10px] bg-[#00A5D4]">
        <FolderArrowDownIcon className="size-1/2 text-[#195BB2]" />
      </div>
      <h3 className="pl-5">{title}</h3>
    </li>
  );
}
