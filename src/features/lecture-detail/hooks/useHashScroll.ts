import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type RefMap = Record<string, HTMLElement | null>;

export function useHashScroll(refMap: RefMap, options?: ScrollIntoViewOptions) {
  const { hash } = useLocation();
  useEffect(() => {
    const element = refMap[hash.replace('#', '')];
    if (element) {
      element.scrollIntoView(options);
    }
  }, [hash, refMap, options]);
}
