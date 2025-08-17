import RequireAuth from "@/app/RequireAuth";
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
} from "@/pages";
import { LoadingSpinner } from "@/shared";
import AppLayout from "@/widgets/AppLayout";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <RequireAuth />
            </Suspense>
          }
        >
          <Route element={<AppLayout />}>
            <Route path="/" element={<MyClassroom />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/instructors" element={<Instructors />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
          <Route path="/lecture/:id" element={<LectureDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
