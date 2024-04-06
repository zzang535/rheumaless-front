import React, { ReactNode } from "react";

interface ContentLayoutProps {
  children: ReactNode;
}

const ContentLayout = ({ children }: ContentLayoutProps) => {
  return (
    <div className="h-screen w-screen pr-4 pl-4 border-2 bg-key-color">
      {children}
    </div>
  );
};

export default ContentLayout;
