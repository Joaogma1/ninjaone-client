import React from "react";
import Select, { components, Props, OptionProps, ValueContainerProps, DropdownIndicatorProps } from "react-select";
import { Icon } from "components";

export interface FormDropdownProps {
   fixedlabel?: string;
}

const DropdownInput: React.FC<Props & FormDropdownProps> = ({ fixedlabel, ...rest }) => {
   return (
      <div>
         <Select
            {...rest}
            components={{
               Option,
               DropdownIndicator,
               IndicatorSeparator: () => null,
               MultiValueRemove: () => null,
               ValueContainer: (props) => <ValueContainer {...props} fixedLabel={fixedlabel} />,
            }}
            styles={{
               menu: (base) => ({ ...base, fontSize: "0.875rem" }),
               control: (base) => ({
                  ...base,
                  margin: 0,
                  border: "0 !important",
                  boxShadow: "none",
                  display: "flex",
                  justifyContent: "center",
                  paddingLeft: "0.75rem",
               }),
               multiValue: (base, props) => ({
                  ...base,
                  backgroundColor: "transparent",
               }),
               valueContainer: (base, props) => ({
                  ...base,
                  backgroundColor: "transparent",
               }),
            }}
         />
      </div>
   );
};

const ValueContainer: React.FC<ValueContainerProps & { fixedLabel?: string }> = ({ fixedLabel, ...props }) => {
   return (
      <>
         {fixedLabel && <span>{fixedLabel}</span>}
         <components.ValueContainer {...props}></components.ValueContainer>
      </>
   );
};

const Option: React.FC<OptionProps> = ({ ...props }) => {
   return (
      <div>
         <components.Option {...props}>
            <input type="checkbox" checked={props.isSelected} onChange={() => null} /> <label>{props.label}</label>
         </components.Option>
      </div>
   );
};

const DropdownIndicator: React.FC<DropdownIndicatorProps> = ({ ...props }) => {
   return (
      <components.DropdownIndicator {...props}>
         <Icon name="Caretdown" size=".5rem" color="#6E6D7A" />
      </components.DropdownIndicator>
   );
};

export default DropdownInput;
