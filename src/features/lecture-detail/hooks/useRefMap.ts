import { useRef, useCallback } from 'react';

export type RefMap = Record<string, HTMLElement | null>;

export function useRefMap() {
  const refMap = useRef<RefMap>({});
  const registerRef = useCallback((node: HTMLElement | null, id: string) => {
    refMap.current[id] = node;
  }, []);
  return { refMap: refMap.current, registerRef };
}
