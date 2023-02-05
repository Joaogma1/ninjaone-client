import React from "react";
import "./table.css";

interface TableProps {
   thead?: React.ReactNode;
   tbody: React.ReactNode;
}

const Table: React.FC<TableProps> = ({ thead, tbody }) => {
   return (
      <table className="table" data-testid="table_id">
         {thead && (
            <thead className="b_bottom_grey f_medium" data-testid="table_thead_id">
               <tr>{thead}</tr>
            </thead>
         )}
         <tbody data-testid="table_tbody_id" className="table-body">{tbody}</tbody>
      </table>
   );
};

export default Table;
