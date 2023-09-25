import {router, useForm} from "@inertiajs/react";
import React from "react";
import Input from "../Form/Input";
import Label from "../Form/Label";
import TextArea from "../Form/TextArea";
import InputError from "../InputError";
import CheckBox from "../Form/Radio_input";
import Radio_input from "../Form/Radio_input";

const News_addForm = () => {
   const {data, setData, post, reset, processing, errors} = useForm({
      titre: "",
      synopsis: "",
      news: "",
      image: "",
      thumbnail:"",
      type:"News"
   });

   const handleSubmit = (e) => {
      e.preventDefault();

      post(route("news.store", data), {
         forceFormData: true,
      });
   };

   return (
      <>
         <h1 className=" my-10 border-b w-1/2 text-lg">Ajouter un article</h1>

         <form onSubmit={handleSubmit} className="w-2/3 flex flex-col gap-y-7">
            {/* Titre*/}
            <article>
               <Label htmlFor="titre" title="Titre" />
               <Input
                  value={data.titre}
                  onChange={(e) => setData("titre", e.target.value)}
                  name="titre"
                  type="text"
                  id="titre"
                  placeholder="Titre de l'article"
               />
               <InputError message={errors.titre} />
            </article>

            {/* synopsis */}
            <article>
               <Label htmlFor="synopsis" title="synopsis" />
               <TextArea
                  value={data.synopsis}
                  onChange={(e) => setData("synopsis", e.target.value)}
                  name="synopsis"
                  type="text"
                  id="synopsis"
                  placeholder="Taper votre synopsis ici..."
               />
               <InputError message={errors.synopsis} />
            </article>
            {/* News*/}
            <article>
               <Label htmlFor="news" title="News" />
               <TextArea
                  value={data.news}
                  onChange={(e) => setData("news", e.target.value)}
                  name="news"
                  type="text"
                  id="news"
                  placeholder="Taper votre news ici..."
               />
               <InputError message={errors.news} />
            </article>

            {/* Image de l'article */}
            <div className=" flex flex-col gap-y-5">
               <article>
                  <Label htmlFor="image" title="Images accompagnant la news " />
                  <Input onChange={(e) => setData("image", e.target.files[0])} name="image" type="file" />
                  <InputError message={errors.image} />
               </article>
               {/* thumbnail */}
               <article>
                  <Label htmlFor="thumbnail" title="Thumbnail de la news" />
                  <Input onChange={(e) => setData("thumbnail", e.target.files[0])} name="thumbnail" type="file" />
                  <InputError message={errors.thumbnail} />
               </article>
            </div>

            <div className="flex justify-center">
               <button type="submit" className="bg-blue-400 rounded-lg p-2  w-1/2">
                  Submit
               </button>
            </div>
         </form>
      </>
   );
};

export default News_addForm;
