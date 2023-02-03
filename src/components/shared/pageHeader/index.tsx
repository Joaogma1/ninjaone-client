import React from "react";
import "./pageHeader.css";

interface Props {
   title: string;
   right?: JSX.Element;
}

const PageHeader: React.FC<Props> = ({ title, right }) => {
   return (
      <div className="pageheader_wrapper" data-testid="pageHeaderWrapper">
         <h1 className="h1 f_medium black100" data-testid="h1">{title}</h1>
         {right && <div className="pageheader_container" data-testid="pageHeader_right" >{right}</div>}
      </div>
   );
};

export default PageHeader;
