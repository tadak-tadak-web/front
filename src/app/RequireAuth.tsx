// app/guards/RequireAuth.tsx
import { useSuspenseQuery } from "@tanstack/react-query";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { userQueries } from "@/entities/user";

export default function RequireAuth() {
  const loc = useLocation();
  const { data: user } = useSuspenseQuery(userQueries.me());
  if (!user.data) {
    return <Navigate to="/login" replace state={{ from: loc }} />;
  }

  return <Outlet context={user.data} />;
}
