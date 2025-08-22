import { Outlet, useLocation } from 'react-router-dom';
import { PAGES } from '@/shared/constants/pages';
import Sidebar from './Sidebar';

export default function AppLayout() {
  const location = useLocation();
  const currentPath = location.pathname;

  const currentPage = PAGES.find(page => page.path === currentPath);
  const title = currentPage?.label;

  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 overflow-auto bg-gray-50">
        <h1 className="text-2xl font-bold text-gray-800 mx-6 my-2 py-4">
          {title}
        </h1>
        <hr className="text-gray-100" />
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
