import Anime_addForm from "@/Components/Animes/Anime_addForm";
import Animes_list from "@/Components/Animes/Animes_list";
import Data_list from "@/Components/Data_list";
import Dashboard_layouts from "@/Layouts/Dashboard_layouts";
import {Head} from "@inertiajs/react";
import React from "react";

const Animes = ({animes}) => {
   return (
      <Dashboard_layouts>
         <Head title="Dashboard" />
         <section className=" w-full flex flex-col justify-center pt-12">
            <Data_list props={animes} />
            <Anime_addForm />
         </section>
      </Dashboard_layouts>
   );
};

export default Animes;
