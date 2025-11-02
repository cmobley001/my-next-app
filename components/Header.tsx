import React from "react";

interface HeaderProps {
  children: React.ReactNode;
}

function Header({ children }: HeaderProps) {
  return (
    <header className="flex justify-between items-center gap-y-6">
      {children}
    </header>
  );
}

export default Header;
