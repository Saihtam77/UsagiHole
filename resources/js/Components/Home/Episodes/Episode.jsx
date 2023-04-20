import { Link } from '@inertiajs/react';
import React from 'react';

const Episode = ({name,episode,image}) => {
    return (
        <Link  className='flex flex-col items-center flex-none'>
            <article>
                <img src={image} className='w-40' alt="" />
                <p>{name} {episode} </p>
            </article>
        </Link>
    );
};

export default Episode;