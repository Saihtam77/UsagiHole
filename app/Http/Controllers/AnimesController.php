<?php

namespace App\Http\Controllers;

use App\Models\Animes;
use DateTime;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class AnimesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $animes = Animes::OrderBy("created_at", "desc")->get();
 
        return Inertia::render("Dashboard/Animes", ["animes" => $animes]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $this->validate($request, [

            "titre" => 'required',
            "date_de_diffusion" => 'required',
            "auteur_oeuvre_originelle" => 'required',
            "genres" => 'required',
            "studio" => 'required',
            "image" => 'required|image|mimes:jpg,png,jpeg|max:1999'

        ]);


        /* Exportation des nouvelles donnée dans la base de donnée */
        $anime = new Animes;

        $anime->type = $request->input('type');
        $anime->titre = $request->input('titre');
        $anime->date_de_diffusion = $request->input('date_de_diffusion');
        $anime->seasonal = $request->input('seasonal');
        $anime->auteur_oeuvre_originelle = $request->input('auteur_oeuvre_originelle');
        $anime->genres = $request->input('genres');
        $anime->studio = $request->input('studio');
        $anime->synopsis = $request->input('synopsis');

   


        /* Recuperation de l'image et traitement */
        $filenameWithExt = $request->file('image')->getClientOriginalName();/* Recuperation du nom du ficher et de son extension */

        $filename = pathinfo($filenameWithExt, PATHINFO_FILENAME);  /* recup le nom du fichier sans l'extension */

        $extension = $request->file('image')->getClientOriginalExtension(); /* recup le l'extension du fichier */

        $fileNameToStore = $filename . '_' . time() . '.' . $extension; /* identification unique de l'images et stockage dans une variable */

        $request->file('image')->storeAs("Images/Animes", $fileNameToStore); /* Stockage de l'image dans le storage */

        $anime->image = $fileNameToStore;

        
        $anime->save();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        
        $this->validate($request, [

            "titre" => 'required',
            "date_de_diffusion" => 'required',
            "auteur_oeuvre_originelle" => 'required',
            "genres" => 'required',
            "studio" => 'required',

        ]);

        $anime = Animes::find($id);


        $anime->titre = $request->input('titre');
        $anime->date_de_diffusion = $request->input('date_de_diffusion');
        $anime->seasonal=$request->input('seasonal');
        $anime->auteur_oeuvre_originelle = $request->input('auteur_oeuvre_originelle');
        $anime->genres = $request->input('genres');
        $anime->studio = $request->input('studio');
        $anime->synopsis = $request->input('synopsis');
        


        if ($request->hasFile("image")) {

            $this->validate($request, ["image" => 'image|mimes:jpg,png,jpeg|max:1999']);

            $filenameWithExt = $request->file('image')->getClientOriginalName();/* Recuperation du nom du ficher et de son extension */

            $filename = pathinfo($filenameWithExt, PATHINFO_FILENAME);  /* recup le nom du fichier sans l'extension */

            $extension = $request->file('image')->getClientOriginalExtension(); /* recup le l'extension du fichier */

            $fileNameToStore = $filename . '_' . time() . '.' . $extension; /* identification unique de l'images et stockage dans une variable */

            $request->file('image')->storeAs("Images/Animes", $fileNameToStore); /* Stockage de l'image dans le storage */

            Storage::delete("Images/Animes/" . $anime->image);/* Supression de la precedent image stocker */
        } else {
            $fileNameToStore = $anime->image;
        }

        $anime->image = $fileNameToStore;

        /* Exportation des nouvelles donnée dans la base de donnée */
        $anime->update();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $anime = Animes::find($id);
        if ($anime->image) {
            Storage::delete("Images/Animes/" . $anime->image);
        }
        $anime->delete();
    }
}
