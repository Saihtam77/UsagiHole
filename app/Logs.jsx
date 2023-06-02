/* Mon formulaire d'edition ne se valide dans la function upadte de mon controller voici le code: */


const Animes = ({animes}) => {
   return <Animes_list animes={animes} />;
};

export default Animes;

const Animes_list = ({animes}) => {
   return (
      <>
         {animes.map((anime) => (
            <div key={anime.id} className="flex flex-none w-full gap-x-7">
               <img className=" rounded-lg w-28 max-h-28" src={"/storage/Images/Animes/" + anime.image} alt="" />
               <Anime_CRUD
                  id={anime.id}
                  nom={anime.nom}
                  genres={anime.genres}
                  date_de_diffusion={anime.date_de_diffusion}
                
               />
            </div>
         ))}
      </>
   );
};

export default Animes_list;

const Anime_CRUD = ({id, nom, genres, date_de_diffusion}) => {
   return <Anime_editForm id={id} nom={nom} genres={genres} date_de_diffusion={date_de_diffusion} />;
};

export default Anime_CRUD;

const Anime_editForm = ({id, nom, genres, date_de_diffusion}) => {
   const handleUpdate = (e) => {
      e.preventDefault();
      put(route("animes.update", id));
   };

   const {data, setData, put, processing, errors} = useForm({
      nom: nom,
      genres: genres,
      date_de_diffusion: date_de_diffusion,
   });

   return (
      <>
         <form
            action="PUT"
            onSubmit={handleUpdate}
            className="w-2/3 flex flex-col gap-y-7"
            encType="multipart/form-data">
            {/* Name */}
            <article>
               <Label htmlFor="nom" title="Nom" />
               <Input
                  value={data.nom}
                  onChange={(e) => setData("nom", e.target.value)}
                  type="text"
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
                  type="text"
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
                  type="date"
                  placeholder=""
               />
               <InputError message={errors.date_de_diffusion} />
            </article>

            <div className="flex pt-5">
               <button type="submit" className="bg-blue-400 rounded-lg p-2  w-1/2">
                  Update
               </button>
            </div>
         </form>
      </>
   );
};

export default Anime_editForm;
