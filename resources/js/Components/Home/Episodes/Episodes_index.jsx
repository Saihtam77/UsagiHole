import React from 'react';
import Episode from './Episode';
import Noimage from "@/Components/noImage.png";
const Episodes_index = () => {
    return (
        <section className='overflow-auto flex gap-x-7 container px-20'>
            <Episode name="eoiufhi" episode={"2"} image={Noimage} />  
            <Episode name="eoiufhi" episode={"2"} image={Noimage} />  
            <Episode name="eoiufhi" episode={"2"} image={Noimage} />  
            <Episode name="eoiufhi" episode={"2"} image={Noimage} />  
            <Episode name="eoiufhi" episode={"2"} image={Noimage} />  
            <Episode name="eoiufhi" episode={"2"} image={Noimage} />  
            <Episode name="eoiufhi" episode={"2"} image={Noimage} />  
        </section>
    );
};

export default Episodes_index;