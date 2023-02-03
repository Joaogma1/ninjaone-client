import React from "react";
import "./index.css";

interface Props {
   left: React.ReactNode;
   right: React.ReactNode;
}
const SplitPane: React.FC<Props> = ({ left, right }) => {
   return (
      <div className="split_panel">
         <div className="left_pane">{left}</div>
         <div className="right_pane">{right}</div>
      </div>
   );
};

export default SplitPane;
