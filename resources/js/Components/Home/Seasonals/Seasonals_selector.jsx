import React from "react";

const Seasonals_selector = ({ handleChange, animes }) => {

    return (
        <article className="w-full lg:w-auto p-5 overflow-auto">
            <div className="container flex gap-x-7 lg:flex-col lg:gap-y-7">
                {animes.map((anime) => (
                    <button
                        key={anime.id}
                        onClick={() => handleChange(anime.image, anime.titre, anime.id)}
                        className="bg-full w-16 h-16 md:w-32 md:h-32 lg:w-28 lg:h-28 border rounded-full flex-none"
                        style={{
                            backgroundImage: `url("/storage/Images/Animes/${anime.image}")`
                        }}
                    ></button>
                ))}
            </div>
        </article>
    );
};

export default Seasonals_selector;
