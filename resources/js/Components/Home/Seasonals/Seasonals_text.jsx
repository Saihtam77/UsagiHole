import React from 'react';

const Seasonals_text = ({text}) => {
    return (
        <article className="flex flex-col justify-center w-1/4 lg:text-2xl items-center gap-y-5 ">
            <h2><b>Title</b></h2>
            <p>{text} </p>
         </article>
    );
};

export default Seasonals_text;