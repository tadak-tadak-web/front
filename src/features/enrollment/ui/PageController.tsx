interface PdfControllerProps {
  pageNumber: number;
  numPages: number | undefined;
  onPrevPage: () => void;
  onNextPage: () => void;
}

export default function PageController({
  pageNumber,
  numPages,
  onPrevPage,
  onNextPage,
}: PdfControllerProps) {
  return (
    <div className="mt-5 flex items-center justify-center gap-4 p-2 rounded-b-md">
      <button
        onClick={onPrevPage}
        disabled={pageNumber <= 1}
        className="px-4 py-2 font-bold text-white bg-blue-500 rounded disabled:bg-gray-300"
      >
        이전
      </button>
      <span>
        {pageNumber} / {numPages || '--'}
      </span>
      <button
        onClick={onNextPage}
        disabled={pageNumber >= (numPages || 1)}
        className="px-4 py-2 font-bold text-white bg-blue-500 rounded disabled:bg-gray-300"
      >
        다음
      </button>
    </div>
  );
}
