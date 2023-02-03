import React from "react";
import "./loading.css";

interface Props {
   message?: string;
}

const Loading: React.FC<Props> = ({ message = "Loading..." }) => {
   return (
      <div className="loading-container" data-testid="loading-container">
         <div className="loading-spinner" data-testid="loading-svg" />
         <p className="loading-message" data-testid="loading-message">
            {message}
         </p>
      </div>
   );
};

export default Loading;
