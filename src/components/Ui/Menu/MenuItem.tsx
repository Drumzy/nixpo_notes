import { ReactNode } from "react";
import { Link } from "react-router-dom";

export interface MenuItemProps {
  title: string;
  icon: ReactNode;
  expanded: boolean;
}
function MenuItem({ title, icon, expanded }: MenuItemProps) {
  return (
    <Link
      to="notes"
      className={`w-full flex p-2 text-cultured hover:bg-slate-500/25 ${
        expanded ? "" : "justify-center"
      }`}
    >
      <span className={`text-lg mr-2 ${expanded ? "" : "hidden"}`}>
        {title}
      </span>
      {icon}
    </Link>
  );
}

export default MenuItem;
