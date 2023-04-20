import {Link} from "@inertiajs/react";
import React from "react";


const ToolsBar = () => {

   return (
      <div className="flex flex-col items-center bg-slate-600 text-white border-white min-h-screen w-44">
         <Link href={route("dashboard")}  className="flex justify-center items-center border-y p-5 w-full">
            <p>Board</p>
         </Link>
         <Link  href={route("dashboard_animes")} className="flex justify-center items-center border-y p-5 w-full">
            <p>Animes</p>  
         </Link>
        
      </div>
   );
};

export default ToolsBar;
