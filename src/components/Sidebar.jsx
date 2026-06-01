import { Link, useLocation } from "react-router-dom";

import { Search, Bell, Heart, DollarSign, Inbox } from "lucide-react";

const menu = [
  {
    icon: Search,
    label: "Search",
    href: "/lomara/search",
  },

  {
    icon: Bell,
    label: "Updates",
    href: "/updates",
  },

  {
    icon: Heart,
    label: "Favorites",
    href: "/favorites",
  },

  {
    icon: DollarSign,
    label: "Home Loans",
    href: "/home-loans",
  },

  {
    icon: Inbox,
    label: "Inbox",
    href: "/inbox",
  },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="sidebar-menu sticky top-0 w-[90px] shrink-0 bg-black border-r border-[#1f1f1f]">
      <div className="h-[96px] gap_area"></div>

      <div className="sidebar-menu-inner sticky top-0 flex flex-col items-center py-4">
        {menu.map((item, index) => {
          const Icon = item.icon;

          const isActive = location.pathname === item.href;

          return (
            <Link
              key={index}
              to={item.href}
              className={`relative w-full h-[82px] flex flex-col items-center justify-center gap-[6px] transition-all duration-300 group ${
                isActive ? "text-white" : "text-[#b8b8b8] hover:text-white"
              }`}
            >
              {/* Active Indicator */}
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-[42px] bg-white rounded-r-full" />
              )}

              {/* Icon */}
              <div
                className={`sidebar_icon_wrap w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                  isActive ? "bg-[#1f1f1f]" : "group-hover:bg-[#151515]"
                }`}
              >
                <Icon
                  size={20}
                  strokeWidth={2.2}
                  className={`transition-all duration-300 sidebar_icon ${
                    isActive
                      ? "text-[#c5913b]"
                      : "text-[#8b8b8b] group-hover:text-[#c5913b]"
                  }`}
                />
              </div>

              {/* Label */}
              <span className="text-[11px] font-medium leading-none">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
