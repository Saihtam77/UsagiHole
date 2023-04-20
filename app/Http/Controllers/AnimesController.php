<?php

namespace App\Http\Controllers;

use App\Models\Animes;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AnimesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $this->validate($request, [

            "nom" => 'required',
            "date_de_diffusion" => 'required',
            "auteur_oeuvre_originelle" => 'required',
            "genres"=>'required', 
            "studio"=>'required', 
            "image" => 'required',

        ],[
            /* Gestion des messages d'erreurs */
            'nom.required' => 'Le nom est obligatoire',
            'date_de_diffusion.required' => 'Préciser la date de diffusion',
            'auteur_oeuvre_originelle.required' => "l'auteur de l'oeuvre originelle doit être préciser",
            'genres.required' => 'Préciser des genres',
            'studio.required' => "Préciser le studio charger de la publication de l'oeuvres",
            'image.required' => "une image pour accompagner l'oeuvre",
        ]);

        

        /* Exportation des nouvelles donnée dans la base de donnée */
        $anime = new Animes;

        $anime->nom = $request->input('nom');
        $anime->date_de_diffusion = $request->input('date_de_diffusion');
        $anime->auteur_oeuvre_originelle = $request->input('auteur_oeuvre_originelle');
        $anime->genres = $request->input('genres');
        $anime->studio = $request->input('studio');
        $anime->synopsis = $request->input('synopsis');

        /*Créee un identifiant unique pour l'images et la stocke*/
        if ($request->hasFile("image")) {
            $filenameWithExt = $request->file('image')->getClientOriginalName();
            /* recup le nom du fichier sans l'extension */
            $filename = pathinfo($filenameWithExt, PATHINFO_FILENAME);
            /* recup le l'extension du fichier */
            $extension = $request->file('image')->getClientOriginalExtension();
            /* stockage de l'image */
            $fileNameToStore = $filename . '_' . time() . '.' . $extension;

            $path = $request->file('image')->storeAs('Animes/images', $fileNameToStore);
        } else {
            $fileNameToStore = "noimage.jpg";   
        }
        
        $anime->image = $fileNameToStore;

        $anime->save();

        return redirect()->route("catalogue")->with("success","Animes ajouter");
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
