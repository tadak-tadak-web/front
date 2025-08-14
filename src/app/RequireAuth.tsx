// app/guards/RequireAuth.tsx
import { userQueries } from '@/entities/user';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

type RequireAuthProps = {
  children?: React.ReactNode;
  redirectTo?: string;
};

export default function RequireAuth({
  children,
  redirectTo = '/login',
}: RequireAuthProps) {
  const loc = useLocation();
  const { data: user } = useSuspenseQuery(userQueries.me());

  if (!user) {
    alert('로그인 후 이용해주세요.');
    return <Navigate to={redirectTo} replace state={{ from: loc }} />;
  }

  // children이 있으면 그대로 렌더, 없으면 라우트 레이아웃(Outlet)로 동작
  return children ? <>{children}</> : <Outlet />;
}
