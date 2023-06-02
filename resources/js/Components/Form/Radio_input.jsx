import React from "react";

const Radio_input = ({title, value, name, onChange}) => {
   return (
      <div className="flex gap-3 items-center">
         <label htmlFor={name}>{title}</label>
         <input type="radio" value={value} name={name} onChange={onChange} />
      </div>
   );
};

export default Radio_input;
