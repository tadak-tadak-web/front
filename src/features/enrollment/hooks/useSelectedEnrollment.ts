import { useState } from 'react';

export const useSelectedEnrollment = (initialSelectedIds: number[] = []) => {
  const [selectedIds, setSelectedIds] = useState<number[]>(initialSelectedIds);

  const addEnrollment = (lectureId: number) => {
    setSelectedIds(prev =>
      prev.includes(lectureId) ? prev : [...prev, lectureId]
    );
  };

  const removeEnrollment = (lectureId: number) => {
    setSelectedIds(prev => prev.filter(id => id !== lectureId));
  };

  const clearAll = () => {
    setSelectedIds([]);
  };

  return {
    selectedIds,
    addEnrollment,
    removeEnrollment,
    clearAll,
  };
};
