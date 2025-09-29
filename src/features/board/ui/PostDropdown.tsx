interface PostDropdownProps {
  isDropdownOpen: boolean;
  setIsEditing: (isEditing: boolean) => void;
  handleDelete: () => void;
}

export default function PostDropdown({
  isDropdownOpen,
  setIsEditing,
  handleDelete,
}: PostDropdownProps) {
  if (!isDropdownOpen) return null;
  return (
    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
      <ul className="py-1">
        <li>
          <button
            onClick={() => setIsEditing(true)}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
          >
            수정
          </button>
        </li>
        <li>
          <button
            onClick={handleDelete}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
          >
            삭제
          </button>
        </li>
      </ul>
    </div>
  );
}
