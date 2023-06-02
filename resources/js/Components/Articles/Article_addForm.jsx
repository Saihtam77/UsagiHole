import {router, useForm} from "@inertiajs/react";
import React from "react";
import Input from "../Form/Input";
import Label from "../Form/Label";
import TextArea from "../Form/TextArea";
import InputError from "../InputError";
import CheckBox from "../Form/Radio_input";
import Radio_input from "../Form/Radio_input";

const Article_addForm = () => {
   const {data, setData, post, reset, processing, errors} = useForm({
      titre: "",

      synopsis: "",
      article: "",

      image: "",

      type:"Articles"
   });

   const handleSubmit = (e) => {
      e.preventDefault();

      post(route("articles.store", data), {
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
            {/* article*/}
            <article>
               <Label htmlFor="article" title="Article" />
               <TextArea
                  value={data.article}
                  onChange={(e) => setData("article", e.target.value)}
                  name="article"
                  type="text"
                  id="article"
                  placeholder="Taper votre article ici..."
               />
               <InputError message={errors.article} />
            </article>

            {/* Image de l'article */}
            <article>
               <Label htmlFor="image" title="Images accompagnant l'article " />
               <Input onChange={(e) => setData("image", e.target.files[0])} name="image" type="file" />
               <InputError message={errors.image} />
            </article>

            <div className="flex justify-center">
               <button type="submit" className="bg-blue-400 rounded-lg p-2  w-1/2">
                  Submit
               </button>
            </div>
         </form>
      </>
   );
};

export default Article_addForm;
