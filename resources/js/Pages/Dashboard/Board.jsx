import {Head, useForm} from "@inertiajs/react";
import React from "react";
import Dashboard_layouts from "@/Layouts/Dashboard_layouts";

const Board = () => {
   return (
      <Dashboard_layouts>
         <Head title="Dashboard" />
         <section className="flex justify-center items-center w-full">
            <div>Board</div>
         </section>
      </Dashboard_layouts>
   );
};

export default Board;
