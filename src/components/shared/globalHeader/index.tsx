import React from "react";
import logo from "assets/images/ninjaOneLogo.svg";
import "./globalHeader.css";

const withGlobalHeader = (WrappedComponent: React.FC) => {
   return (props: any) => {
      return (
         <>
            <header className="bg_darkblue" id="global-header">
               <img src={logo} alt="Logo" style={{ height: "25px", marginLeft: "24px" }} />
            </header>
            <WrappedComponent {...props} />
         </>
      );
   };
};
export default withGlobalHeader;
