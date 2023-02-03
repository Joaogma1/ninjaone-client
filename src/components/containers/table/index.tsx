import React from "react";
import "./table.css";

interface TableProps {
   thead?: React.ReactNode;
   tbody: React.ReactNode;
}

const Table: React.FC<TableProps> = ({ thead, tbody }) => {
   return (
      <table className="table">
         {thead && (
            <thead className="b_bottom_grey f_medium">
               <tr>{thead}</tr>
            </thead>
         )}
         <tbody className="table-body">{tbody}</tbody>
      </table>
   );
};

export default Table;
