import { Link } from '@inertiajs/react';
import React from 'react';

const Anime = ({nom,img}) => {
    return (
        <Link className='flex flex-col items-center'>
            <img src={img} alt="" />
            <p>{nom}</p>
        </Link>
    );
};

export default Anime;