import { useLocation, Link } from "react-router-dom";
import { sidebarMenus } from "./sidebarMenus";
import clsx from "clsx";

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-[260px] h-screen border-r border-gray-200 p-6">
      <Link to="/" className="flex items-center mb-8 gap-1">
        <img src="/logo.svg" alt="LemoHub Logo" className="ml-5 w-10 h-10" />
        <span className="text-2xl font-medium text-gray-500">LemoHub</span>
      </Link>
      <ul className="space-y-2">
        {sidebarMenus.map(({ label, path, icon: Icon }) => {
          const isActive = location.pathname === path;
          return (
            <li key={path}>
              <Link
                to={path}
                className={clsx(
                  "flex items-center gap-3 px-4 py-2 rounded-md text-md transition-colors",
                  isActive
                    ? "bg-yellow-100 text-yellow-800"
                    : "text-gray-600 hover:bg-gray-100"
                )}
              >
                <Icon className="w-5 h-5 shrink-0" />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
