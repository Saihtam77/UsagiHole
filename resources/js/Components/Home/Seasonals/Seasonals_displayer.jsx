import React from "react";

const Seasonals_displayer = ({image}) => {
   return (
      <div
         className="rounded-full bg-full w-32 h-32 md:w-52 md:h-52 lg:w-80 lg:h-80 border"
         style={{ backgroundImage: `url(${image})` }}></div>
   );
};

export default Seasonals_displayer;
