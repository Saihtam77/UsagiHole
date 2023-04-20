import Layout from '@/Layouts/Layout';
import React from 'react';
import SearchBar_index from '@/Components/SearchBar/SearchBar_index';
import Animes_index from '@/Components/Animes/Animes_index';


const Catalogue = ({animes,success}) => {
   
    return (
        <Layout>
            <main className='flex flex-col min-h-screen gap-y-10 mt-20'>
                <SearchBar_index />
                <Animes_index animes={animes} />
            </main>
        </Layout>
    );
};

export default Catalogue;