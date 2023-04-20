import News_index from '@/Components/Home/News/News_index';
import Seasonals_index from '@/Components/Home/Seasonals/Seasonals_index';
import Layout from '@/Layouts/Layout';
import React from 'react';
import Episodes_index from '@/Components/Home/Episodes/Episodes_index';
import Articles_index from '@/Components/Home/Articles/Articles_index';

const Home = () => {
    return (
        <Layout>
            <main className='flex flex-col min-h-screen gap-y-10'>
                <News_index />
                <Seasonals_index />
                <Episodes_index />
                <Articles_index />
            </main>
        </Layout>  
    );
};

export default Home;