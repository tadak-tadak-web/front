import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '@/widgets/AppLayout';
import {
  LoginPage,
  RegisterPage,
  LectureDetail,
  MyClassroom,
  Schedule,
  Progress,
  Instructors,
  Achievements,
  Settings,
} from '@/pages';
import RequireAuth from '@/app/RequireAuth';
import { LoadingSpinner } from '@/shared';
import { Suspense } from 'react';
import { lectureListLoader } from '@/entities/lecture';
import { useQueryClient, type QueryClient } from '@tanstack/react-query';

const createRouter = (queryClient: QueryClient) => {
  return createBrowserRouter([
    {
      path: '/login',
      element: <LoginPage />,
    },
    {
      path: '/register',
      element: <RegisterPage />,
    },
    {
      element: <RequireAuth />,
      children: [
        {
          element: <Layout />,
          children: [
            { path: '/', element: <MyClassroom /> },
            { path: '/schedule', element: <Schedule /> },
            { path: '/progress', element: <Progress /> },
            { path: '/instructors', element: <Instructors /> },
            { path: '/achievements', element: <Achievements /> },
            { path: '/settings', element: <Settings /> },
          ],
        },
        {
          path: '/lecture/:id',
          element: <LectureDetail />,
          loader: ({ params }) =>
            lectureListLoader({
              id: Number(params.id),
              queryClient,
            }),
        },
      ],
    },
  ]);
};
export default function Router() {
  const queryClient = useQueryClient();
  return (
    <Suspense
      fallback={
        <LoadingSpinner className="fixed inset-0 flex justify-center items-center bg-white/60 z-50" />
      }
    >
      <RouterProvider router={createRouter(queryClient)} />
    </Suspense>
  );
}
