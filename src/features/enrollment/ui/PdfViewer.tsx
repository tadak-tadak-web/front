import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import type { PDFPageProxy } from 'pdfjs-dist';
import PageController from './PageController';
import LoadingSpinner from '@/shared/ui/LoadingSpinner';
import { usePdfViewer } from '@/features/enrollment/model/usePdfViewer'; // 👈 커스텀 훅 import

interface PdfViewerProps {
  fileUrl: string;
}

export default function PdfViewer({ fileUrl }: PdfViewerProps) {
  const [numPages, setNumPages] = useState<number>();
  const [pageDimensions, setPageDimensions] = useState<{
    width: number;
    height: number;
  } | null>(null);

  const { pageNumber, goToPrevPage, goToNextPage } = usePdfViewer(numPages);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  function onPageLoadSuccess(page: PDFPageProxy): void {
    const viewport = page.getViewport({ scale: 1 });
    setPageDimensions({ width: viewport.width, height: viewport.height });
  }

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="overflow-x-auto border rounded-t-md max-h-[80vh] overflow-y-auto">
        <Document
          file={fileUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<LoadingSpinner />}
          error={<p>PDF 파일을 불러오는 데 실패했습니다.</p>}
        >
          <div
            style={
              pageDimensions
                ? { height: pageDimensions.height, width: pageDimensions.width }
                : {}
            }
          >
            <Page
              pageNumber={pageNumber}
              onLoadSuccess={onPageLoadSuccess}
              loading={
                <div className="w-full h-full flex justify-center items-center">
                  <LoadingSpinner />
                </div>
              }
            />
          </div>
        </Document>
      </div>
      {numPages && (
        <PageController
          pageNumber={pageNumber}
          numPages={numPages}
          onPrevPage={goToPrevPage}
          onNextPage={goToNextPage}
        />
      )}
    </div>
  );
}
