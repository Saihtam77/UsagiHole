import Animes_Add from "@/Components/Animes/Animes_Add";
import Dashboard_layouts from "@/Layouts/Dashboard_layouts";
import { Head } from "@inertiajs/react";
import React from "react";

const Animes = () => {
   return (
      <Dashboard_layouts>
         <Head title="Dashboard" />
         <section className="container flex flex-col justify-center items-center">
            <Animes_Add />
         </section>
      </Dashboard_layouts>
   );
};

export default Animes;
