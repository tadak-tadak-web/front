import { useState, useEffect, useRef } from 'react';

export function usePdfViewer(numPages: number | undefined) {
  const [pageNumber, setPageNumber] = useState(1);
  const numPagesRef = useRef(numPages);

  useEffect(() => {
    numPagesRef.current = numPages;
    setPageNumber(1);
  }, [numPages]);

  const goToPrevPage = () => {
    setPageNumber(prev => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber(prev => Math.min(prev + 1, numPagesRef.current || 1));
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') goToPrevPage();
      if (event.key === 'ArrowRight') goToNextPage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return { pageNumber, goToPrevPage, goToNextPage };
}
