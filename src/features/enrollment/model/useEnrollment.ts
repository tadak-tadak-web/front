import { useState } from 'react';
import type { EnrollmentData } from '@/entities/enrollment';

export const useEnrollment = (initialData: EnrollmentData[]) => {
  const [availableLectures, setAvailableLectures] =
    useState<EnrollmentData[]>(initialData);
  const [enrolledLectures, setEnrolledLectures] = useState<EnrollmentData[]>(
    []
  );

  const handleAddLecture = (lecture: EnrollmentData) => {
    setAvailableLectures(prev => prev.filter(item => item.id !== lecture.id));
    setEnrolledLectures(prev => [...prev, lecture]);
  };

  const handleDeleteLecture = (lecture: EnrollmentData) => {
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
