import { useState } from 'react';
import type { Enrollment } from '@/entities/enrollment';

export const useEnrollment = (initialData: Enrollment[]) => {
  const [availableLectures, setAvailableLectures] =
    useState<Enrollment[]>(initialData);
  const [enrolledLectures, setEnrolledLectures] = useState<Enrollment[]>([]);

  const handleAddLecture = (lecture: Enrollment) => {
    setAvailableLectures(prev => prev.filter(item => item.id !== lecture.id));
    setEnrolledLectures(prev => [...prev, lecture]);
  };

  const handleDeleteLecture = (lecture: Enrollment) => {
    setEnrolledLectures(prev => prev.filter(item => item.id !== lecture.id));
    setAvailableLectures(prev => [...prev, lecture]);
  };

  const handleRemoveAll = () => {
    setAvailableLectures(prev => [...prev, ...enrolledLectures]);
    setEnrolledLectures([]);
  };

  return {
    availableLectures,
    enrolledLectures,
    handleAddLecture,
    handleDeleteLecture,
    handleRemoveAll,
  };
};
