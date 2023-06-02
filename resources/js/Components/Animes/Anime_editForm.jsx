import {Link, useForm} from "@inertiajs/react";
import React, {useState} from "react";
import Input from "../Form/Input";
import Label from "../Form/Label";
import TextArea from "../Form/TextArea";
import InputError from "../InputError";
import Radio_input from "../Form/Radio_input";

const Anime_editForm = ({prop}) => {
   const {data, setData, post, processing, errors} = useForm({
      _method: "put",
      titre: prop.titre,
      genres: prop.genres,
      date_de_diffusion: prop.date_de_diffusion,
      seasonal: prop.seasonal,
      auteur_oeuvre_originelle: prop.auteur_oeuvre_originelle,
      studio: prop.studio,
      image: prop.image,
      synopsis: prop.synopsis,
   });

   const handleUpdate = (e) => {
      e.preventDefault();
      post(route("animes.update", prop.id), {
         forceFormData: true,
      });
   };

   return (
      <>
         <form onSubmit={handleUpdate} className="w-2/3 flex flex-col gap-y-7">
            {/* Name */}
            <article>
               <Label htmlFor="titre" title="Titre" />
               <Input
                  name="titre"
                  value={data.titre}
                  onChange={(e) => setData("titre", e.target.value)}
                  type="text"
                  placeholder="Intituler de l'oeuvre"
               />
               <InputError message={errors.titre} />
            </article>
            {/* Genres */}
            <article>
               <Label htmlFor="genres" title="Genres" />
               <Input
                  name="genres"
                  value={data.genres}
                  onChange={(e) => setData("genres", e.target.value)}
                  type="text"
                  placeholder="Genre de l'oeuvre"
               />
               <InputError message={errors.genres} />
            </article>

            <article className="flex gap-x-7">
               {/* date de diffusion  */}

               <div className="w-full flex flex-col">
                  <Label htmlFor="date_de_diffusion" title="Date de diffusion" />
                  <Input
                     value={data.date_de_diffusion}
                     onChange={(e) => setData("date_de_diffusion", e.target.value)}
                     name="date_de_diffusion"
                     type="date"
                     id="date_de_diffusion"
                  />
                  <InputError message={errors.date_de_diffusion} />
               </div>

               <div className="w-full flex flex-col gap-x-7">
                  <Label htmlFor="seasonal" title="Seasonal ?" />
                  <div className="flex gap-x-7">
                     <Radio_input
                        value={data.seasonal}
                        title="Oui"
                        name="seasonal"
                        onChange={(e) => setData("seasonal", true)}
                     />
                     <Radio_input
                        value={data.seasonal}
                        title="Non"
                        name="seasonal"
                        onChange={(e) => setData("seasonal", false)}
                     />
                  </div>
                  {console.log(data.seasonal)}
               </div>
            </article>

            <div className="flex justify-between gap-x-5">
               {/* Studio */}
               <article className="w-full">
                  <Label htmlFor="studio" title="Studio" />
                  <Input
                     value={data.studio}
                     onChange={(e) => setData("studio", e.target.value)}
                     name="studio"
                     type="text"
                     id="studio"
                     placeholder="Studio de publication"
                  />
                  <InputError message={errors.studio} />
               </article>

               {/* Auteur de l'oeuvre originelle*/}
               <article className="w-full">
                  <Label htmlFor="auteur_oeuvre_originelle" title="Auteur de l'oeuvre originelle" />
                  <Input
                     value={data.auteur_oeuvre_originelle}
                     onChange={(e) => setData("auteur_oeuvre_originelle", e.target.value)}
                     name="auteur_oeuvre_originelle"
                     type="text"
                     id="auteur_oeuvre_originelle"
                     placeholder="Nom de l'auteur de l'oeuvre originelle"
                  />
                  <InputError message={errors.auteur_oeuvre_originelle} />
               </article>
            </div>

            {/* Image de l'oeuvre */}
            <article>
               <Label htmlFor="image" title="Images accompagnant l'oeuvre" />
               <Input onChange={(e) => setData("image", e.target.files[0])} name="image" type="file" />
               <InputError message={errors.image} />
            </article>

            {/* Synopsis */}
            <div>
               <Label htmlFor="synopsis" title="Synopsis de l'oeuvre" />
               <TextArea
                  name="synopsis"
                  value={data.synopsis}
                  onChange={(e) => setData("synopsis", e.target.value)}
                  type="text"
                  placeholder="Bref introduction de l'oeuvre..."
               />
               <InputError message={errors.synopsis} />
            </div>

            <div className="flex pt-5">
               <button type="submite" className="bg-blue-400 rounded-lg p-2  w-1/2">
                  Update
               </button>
            </div>
         </form>
      </>
   );
};

export default Anime_editForm;
