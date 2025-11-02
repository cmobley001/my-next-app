import React from "react";

interface LabWeekProps {
  week: string;
  title: string;
  children?: React.ReactNode;
}

function LabWeek({ week, title, children }: LabWeekProps) {
  return (
    <div className="text-center">
      <h2 className="text-lg">
        This is Week <span className="font-bold">#{week}</span> for Lab:{" "}
        <span className="font-bold">{title}</span>
      </h2>
      {children}
    </div>
  );
}

export default LabWeek;
