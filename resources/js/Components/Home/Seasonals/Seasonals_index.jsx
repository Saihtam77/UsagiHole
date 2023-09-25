import React, { useState } from "react";
import Noimage from "@/Components/noImage.png";
import Seasonals_displayer from "./Seasonals_displayer";
import Seasonals_text from "./Seasonals_text";
import Seasonals_selector from "./Seasonals_selector";

const Seasonals_index = ({ animes }) => {
    const [image, setimages] = useState(animes[0].image);
    const [titre, setTitre] = useState(animes[0].titre);
    const [id, setId] = useState(animes[0].id);

    const handleChange = (image, titre, id) => {
        setimages(image);
        setTitre(titre);
        setId(id)
    };
    return (
        <section className="flex flex-col items-center p-5 gap-y-12 lg:flex-row lg:justify-between lg:container lg:mx-auto ">
            <Seasonals_displayer titre={titre} id={id} image={image} />
            <Seasonals_selector
                handleChange={handleChange}
                animes={animes}
                Noimage={Noimage}
            />
            <Seasonals_text titre={titre} />
        </section>
    );
};

export default Seasonals_index;
