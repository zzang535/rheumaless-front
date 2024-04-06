import React from "react";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className="flex justify-center items-center h-16 bg-[#f9f4e8] text-xl">
      <h1>{title}</h1>
    </div>
  );
};

export default Header;
