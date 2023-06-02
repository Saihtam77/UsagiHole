import React, {useState} from "react";

import ToolsBar from "./ToolsBar";

import {Link} from "@inertiajs/react";
import ToolsBar_toogle from "./ToolsBar_toogle";

const ToolsBar_index = () => {
   const [toolsBarDisplay, setToolsBarDisplay] = useState(false);
   console.log(toolsBarDisplay);

   const toogleClick = (e) => {
      e.preventDefault();
      setToolsBarDisplay(!toolsBarDisplay);
   };
   return (
      <section className={`flex sticky toolsBar ${toolsBarDisplay ? "active" : ""}`}>
         <ToolsBar state={toolsBarDisplay} />
        <ToolsBar_toogle toogleClick={toogleClick} />
      </section>
   );
};

export default ToolsBar_index;
