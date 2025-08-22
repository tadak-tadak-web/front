import { useSuspenseQuery } from '@tanstack/react-query';
import { lectureQueries, type Lecture } from '@/entities/lecture';
import { useParams } from 'react-router-dom';
import type { ComponentType } from 'react';

export function withLectureList<P extends { lectureList: Lecture[] }>(
  WrappedComponent: ComponentType<P>
) {
  return function LectureListContainer(props: Omit<P, 'lectureList'>) {
    const { id } = useParams();
    const { data: lectureList } = useSuspenseQuery(
      lectureQueries.lectureList(Number(id))
    );
    return <WrappedComponent {...(props as P)} lectureList={lectureList} />;
  };
}
