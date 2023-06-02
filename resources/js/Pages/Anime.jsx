import Layout from "@/Layouts/Layout";
import {Link} from "@inertiajs/react";
import React, {useState} from "react";

const Anime = ({anime}) => {
   const [collapse, setCollapse] = useState(false);

   const showMore = (e) => {
      e.preventDefault();
      setCollapse(!collapse);
   };
   return (
      <Layout>
         <main className="w-full flex flex-col min-h-screen">
            <section className="flex flex-col container mx-auto p-5 mt-10 lg:flex-row">
               <div className="flex justify-center items-center">
                  <img src={"/storage/Images/Animes/" + anime.image} alt="Image de l'animes" />
               </div>

               <article className=" flex flex-col justify-between px-5">
                  <header className="flex justify-center p-3 text-2xl">
                     <b>{anime.titre}</b>
                  </header>

                  <div className="flex flex-col justify-end">
                     <ul>
                        <li><b>Diffuser le :</b> {anime.date_de_diffusion}</li>
                        <li><b>Auteur de l'oeuvre originelle:</b> {anime.auteur_oeuvre_originelle}</li>
                        <li><b>Studio:</b> {anime.studio}</li>
                        <li><b>Genres:</b> {anime.genres}</li>
                     </ul>
                     
                     <Link
                        as="button"
                        onClick={showMore}
                        className=" w-1/4 rounded-xl mx-auto text-center text-lg p-3 border">
                        Synopsis
                     </Link>
                     <hr className="border w-full" />
                     <div className={`container mx-auto collapse-element ${collapse ? "active" : ""}`}>
                        <p>
                           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt nostrum rem vero voluptate
                           laborum quaerat minima distinctio quod ullam voluptas. Illo consectetur totam asperiores. Modi,
                           magni veritatis! Maiores, tempore qui Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                           Amet nihil laudantium doloremque. Quisquam nobis nihil quibusdam placeat, veniam, nam architecto
                           voluptatum pariatur quidem dignissimos, aliquid blanditiis. Iusto nam explicabo praesentium!.
                        </p>
                     </div>
                  </div>
               </article>
            </section>
         </main>
      </Layout>
   );
};

export default Anime;
