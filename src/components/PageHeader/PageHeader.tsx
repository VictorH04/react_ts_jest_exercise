import React from "react";
import "./PageHeader.css";

interface IPageHeaderProps {
  HeaderText: string;
}

const PageHeader: React.FC<IPageHeaderProps> = ({ HeaderText }) => {
  return (
    <div className="PageHeader">
      <h1 className="PageHeader_Text">{HeaderText}</h1>
    </div>
  );
};

export default PageHeader;
