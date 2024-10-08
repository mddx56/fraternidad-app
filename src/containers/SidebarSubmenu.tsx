import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface SidebarSubmenuProps {
  path: string;
  icon: JSX.Element;
  pageName: string;
  submenu?: SubmenuItem[];
}

interface SubmenuItem {
  path: string;
  icon: any;
  pageName: string;
}

function SidebarSubmenu({ submenu, pageName, icon }: SidebarSubmenuProps) {
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(false);
  //const pathname = usePathname()

  /** Open Submenu list if path found in routes, this is for directly loading submenu routes  first time */
  useEffect(() => {
    if (submenu && submenu.some((m) => m.path === location.pathname))
      setIsExpanded(true);
  }, [submenu, location.pathname]);

  return (
    <div className="flex flex-col bg-base-200">
      {/** Route header */}
      <div className="w-full block" onClick={() => setIsExpanded(!isExpanded)}>
        {icon} {pageName}
        <ChevronDown
          className={`w-5 h-5 mt-1 float-right delay-400 duration-500 transition-all ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </div>

      {/** Submenu list */}
      <div className={`w-full ${isExpanded ? "" : "hidden"}`}>
        <ul className="menu menu-compact">
          {submenu &&
            submenu.map((m, k) => (
              <li key={k}>
                <Link to={m.path}>
                  {m.icon} {m.pageName}
                  {location.pathname === m.path ? (
                    <span
                      className="absolute mt-1 mb-1 inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary"
                      aria-hidden="true"
                    ></span>
                  ) : null}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default SidebarSubmenu;
