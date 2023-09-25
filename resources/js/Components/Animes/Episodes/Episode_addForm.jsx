import Input from '@/Components/Form/Input';
import Label from '@/Components/Form/Label';
import InputError from '@/Components/InputError';
import { useForm } from '@inertiajs/react';
import React from 'react';

const Episode_addForm = ({ anime }) => {

    const { data, setData, post, reset, processing, errors } = useForm({
        titre: anime.titre,
        numero: "",
        video: "",
        anime_id: anime.id,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("episodes.store", data), {
            forceFormData: true,
        });
    };

    return (
        <>


            <form onSubmit={handleSubmit} className='flex flex-col gap-y-5 pt-3'>
                <article>

                    <div className='w-1/4'>
                        <Label htmlFor="numero" title="Numero" />
                        <Input
                            value={data.numero}
                            onChange={(e) => setData("numero", e.target.value)}
                            name="numero"
                            type="number"
                            id="number"


                        />
                    </div>

                </article>
                <article>
                    <Label htmlFor="video" title="Episode Mp4" />
                    <Input onChange={(e) => setData("video", e.target.files[0])} name="video" type="file" />
                    <InputError message={errors.video} />
                </article>
                <div className="flex justify-center">
                    <button type="submit" className="bg-blue-400 rounded-lg p-2  w-1/2">
                        Ajouter
                    </button>
                </div>
            </form>
        </>

    )
};

export default Episode_addForm;