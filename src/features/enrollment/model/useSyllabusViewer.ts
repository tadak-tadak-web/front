import { useState } from 'react';
import type { Syllabus } from '@/entities/enrollment';

export const useSyllabusViewer = () => {
  const [syllabus, setSyllabus] = useState<Syllabus | null>(null);

  const open = (s: Syllabus) => setSyllabus(s);
  const close = () => setSyllabus(null);

  return { syllabus, open, close };
};
