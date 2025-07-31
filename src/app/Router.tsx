import { LectureDetail, LoginPage, RegisterPage } from '@/pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/lecture/:id" element={<LectureDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
