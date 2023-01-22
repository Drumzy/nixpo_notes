import React from "react";

export interface MenuProps {
  children: React.ReactNode;
}

function Menu({ children }: MenuProps) {
  return (
    <div className="w-full h-9/10 justify-evenly overflow-y-auto scrollbar">
      {children}
    </div>
  );
}

export default Menu;
