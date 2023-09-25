import Episode_CRUD from '@/Components/Animes/Episodes/Episode_CRUD';
import Episode_addForm from '@/Components/Animes/Episodes/Episode_addForm';
import PrimaryButton from '@/Components/PrimaryButton';
import Dashboard_layouts from '@/Layouts/Dashboard_layouts';
import { Head, Link } from '@inertiajs/react';
import React, { useState } from 'react';

const Episodes = ({ animes, episodes }) => {
    const [addEpisode, setAddEpisode] = useState(false);
    const [listEpisode, setListEpisode] = useState(false);

    const AddEpisodes = (e) => {
        e.preventDefault();
        setAddEpisode(!addEpisode);
    };
    const ListEpisodes = (e) => {
        e.preventDefault();
        setListEpisode(!listEpisode);
    };
    return (
        <Dashboard_layouts>
            <Head title="Dashboard" />
            <section className='w-fulls flex flex-col items-center pt-12'>
                <article className='container flex  gap-x-5'>
                    {animes.map((anime) => (

                        <div className='flex flex-col gap-x-10'>
                            <div key={anime.id} className='flex flex-col items-center justify-center gap-y-3'>
                                <div className='bg-full w-52 h-52' style={{ backgroundImage: `url("/storage/Images/Animes/${anime.image}")` }}>
                                </div>
                                <h3 className='text-center'>{anime.titre}</h3>

                            </div>

                            <div className='flex flex-col gap-y-5'>
                                <Link as='button' onClick={ListEpisodes}>Liste des epiodes</Link>
                                <div className={`collapse-element ${listEpisode ? "active" : ""}`}>

                                    {episodes.map((episode) => {

                                        if (episode.id === anime.id) {
                                            return (
                                                <>
                                                    <div key={episode.id} className='flex gap-x-3'>
                                                        <div className='bg-full w-8 h-8' style={{ backgroundImage: `url("/storage/Images/Animes/${anime.image}")` }}>
                                                        </div>
                                                        <h1>{episode.titre}</h1>
                                                    </div>
                                                    
                                                    <Episode_CRUD />
                                                </>
                                            )
                                        }
                                        <>
                                            <Link>Ajouter un episode</Link>
                                            <div>
                                                <Episode_addForm anime={anime} AddEpisodes />
                                            </div>
                                        </>
                                    })}
                                    
                                    <Link as="button" className=''>Ajouter des épisodes</Link>

                                </div>

                            </div>


                        </div>

                    ))}

                </article>
            </section>
        </Dashboard_layouts>
    );
};

export default Episodes;