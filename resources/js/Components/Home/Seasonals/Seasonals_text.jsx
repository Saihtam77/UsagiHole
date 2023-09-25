import React from 'react';

const Seasonals_text = ({titre}) => {
    return (
        <article className="flex flex-col justify-center w-1/4 lg:text-2xl items-center gap-y-5 ">
            <h2><b>{titre}</b></h2>
            <p>{titre} </p>
         </article>
    );
};

export default Seasonals_text;