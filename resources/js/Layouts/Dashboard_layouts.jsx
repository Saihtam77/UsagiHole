import Dashboard_Navbar from "@/Components/Dashboard/Dashboard_Navbar";
import ToolsBar_index from "@/Components/Dashboard/ToolsBar/ToolsBar_index";

import React from "react";

const Dashboard_layouts = ({children}) => {
   return (
      <>
         <Dashboard_Navbar />
         <main className="flex">
            <ToolsBar_index />
            {children}
         </main>
      </>
   );
};

export default Dashboard_layouts;
