import React from "react";

interface MainProps {
  children: React.ReactNode;
}

function Main({ children }: MainProps) {
  return (
    <main className="grow flex flex-col justify-center gap-y-4 items-center p-6 bg-slate-100 rounded-xl">
      <h2>This is the main section.</h2>
      {children}
    </main>
  );
}
export default Main;
