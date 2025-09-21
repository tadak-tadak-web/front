import { useState } from 'react';
import type { Enrollment } from '@/entities/enrollment';

export const useSyllabusViewer = () => {
  const [syllabus, setSyllabus] = useState<Enrollment['syllabus'] | null>(null);

  const open = (s: Enrollment['syllabus']) => setSyllabus(s);
  const close = () => setSyllabus(null);

  return { syllabus, open, close };
};
