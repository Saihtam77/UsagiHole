import {useForm} from "@inertiajs/react";
import React from "react";
import Input from "../Form/Input";
import Label from "./../Form/Label";
import TextArea from "./../Form/TextArea";
import InputError from "../InputError";

const Animes_Add = () => {
   const handleSubmit = (e) => {
      e.preventDefault();     
      post(route("animes.store"));
   };

   const {data, setData, post, processing, errors} = useForm({
      nom: "",
      genres: "",
      date_de_diffusion: "",
      auteur_oeuvre_originelle: "",
      studio: "",
      image: "",
      synopsis: "",
   });

   return (
      <>
         
         <form
            action="post"
            onSubmit={handleSubmit}
            className="w-2/3 flex flex-col gap-y-7"
            encType="multipart/form-data">
            {/* Name */}
            <article>
               <Label htmlFor="nom" title="Nom" />
               <Input
                  value={data.nom}
                  onChange={(e) => setData("nom", e.target.value)}   
                  name="nom"
                  type="text"
                  id="nom"
                  placeholder="Intituler de l'oeuvre"
               />
               <InputError message={errors.nom} />
            </article>
            {/* Genres */}
            <article>
               <Label htmlFor="genres" title="Genres" />
               <Input
                  value={data.genres}
                  onChange={(e) => setData("genres", e.target.value)}
                  name="genres"
                  type="text"
                  id="genres"
                  placeholder="Genre de l'oeuvre"
               />
               <InputError message={errors.genres} />
            </article>

            {/* date de diffusion  */}
            <article>
               <Label htmlFor="date_de_diffusion" title="Date de diffusion" />
               <Input
                  value={data.date_de_diffusion}
                  onChange={(e) => setData("date_de_diffusion", e.target.value)}
                  name="date_de_diffusion"
                  type="date"
                  id="date_de_diffusion"
                  placeholder=""
               />
               <InputError message={errors.date_de_diffusion} />
            </article>
            {/* Auteur de l'oeuvre originelle*/}
            <article>
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

            {/* Studio */}
            <article>
               <Label htmlFor="Studio" title="Studio" />
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

            {/* Image de l'oeuvre */}
            <div>
               <Label htmlFor="image" title="Images accompagnant l'oeuvre" />
               <Input
                  value={data.image}
                  onChange={(e) => setData("image", e.target.value)}
                  name="image"
                  type="file"
                  id="image"
                  placeholder=""
               />
               <InputError message={errors.image} />
            </div>

            <div>
               <Label htmlFor="synopsis" title="Synopsis de l'oeuvre" />
               <TextArea
                  value={data.synopsis}
                  onChange={(e) => setData("synopsis", e.target.value)}
                  name="synopsis"
                  type="text"
                  id="synopsis"
                  placeholder="Bref introduction de l'oeuvre..."
               />
               <InputError message={errors.synopsis} />
            </div>

            <div className="flex justify-center">
               <button
                  type="submit"
                  className="bg-blue-400 rounded-lg p-2  w-1/2">
                  Submit
               </button>
            </div>
         </form>
      </>
   );
};

export default Animes_Add;
