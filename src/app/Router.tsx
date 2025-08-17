import RequireAuth from "@/app/RequireAuth";
import { LectureDetail, LoginPage, RegisterPage } from "@/pages";
import MyClassroom from "@/pages/MyClassroom";
import { LoadingSpinner } from "@/shared";
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
          <Route path="/" element={<MyClassroom />} />
          <Route path="/lecture/:id" element={<LectureDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
