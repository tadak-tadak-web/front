import RequireAuth from '@/app/RequireAuth';
import { LectureDetail, LoginPage, RegisterPage } from '@/pages';
import { LoadingSpinner } from '@/shared';
import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Suspense fallback={<LoadingSpinner />}>
        <RequireAuth>
          <Routes>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/lecture/:id" element={<LectureDetail />} />
          </Routes>
        </RequireAuth>
      </Suspense>
    </BrowserRouter>
  );
}
