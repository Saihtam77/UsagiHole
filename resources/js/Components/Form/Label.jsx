import React from "react";

const Label = ({ htmlFor, title }) => {
   return (
      <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-900 dark:text-white">
         {title}
      </label>
   );
};

export default Label;
