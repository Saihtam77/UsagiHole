import {Link} from "@inertiajs/react";
import React from "react";

const ToolsBar_toogle = ({toogleClick}) => {
   return (
      <Link as="button" onClick={(e) => toogleClick(e)} className="flex flex-col items-center gap-y-2 pl-8 pt-8">
         <span className="bg-black w-14 h-2"></span>
         <span className="bg-black w-14 h-2"></span>
         <span className="bg-black w-14 h-2"></span>
         <span>Dashboard</span>
      </Link>
   );
};

export default ToolsBar_toogle;
