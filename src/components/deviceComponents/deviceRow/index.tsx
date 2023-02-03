import React, {memo} from "react";
import {OperatingSystem} from "types/enums/operatingSystemType";
import {Device} from "types/models/deviceType";
import ActionDropdown from "../actionDropdown";
import {Icon} from "components";
import "./deviceRow.css";

interface Props {
   item: Device;
   onDelete: () => void;
   onEdit: () => void;
}

const DeviceRow: React.FC<Props> = ({ item, onDelete, onEdit }) => {
   const displayInfo = `${item.type} workstation - ${item.hdd_capacity} GB`;

   const getType = () => OperatingSystem[item.type.toUpperCase() as keyof typeof OperatingSystem] as "Linux" | "Mac" | "Windows";

   return (
      <tr className="row b_bottom_grey table_row_wrapper">
         <td className="deviceinfo_wrapper">
            <div className="deviceinfo_top_section row center start">
               <Icon name={getType()} size="1rem" color="var(--black75)" />
               <p className="h4 row black100 f_medium">{item.system_name.toUpperCase()}</p>
            </div>
            <div className="deviceinfo_bottom_section row center start">
               <p className="device_spec row h5 f_normal black65">{displayInfo}</p>
            </div>
         </td>
         <td className="action_container row end center">
            <ActionDropdown
               id={item.id}
               options={[
                  { label: "Edit", onClick: onEdit },
                  { label: "Delete", onClick: onDelete, color: "var(--danger)" },
               ]}
            />
         </td>
      </tr>
   );
};

export default memo(DeviceRow);
