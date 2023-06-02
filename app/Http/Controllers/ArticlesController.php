<?php

namespace App\Http\Controllers;

use App\Models\Articles;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ArticlesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $articles = Articles::OrderBy("created_at", "desc")->get();
   
        return Inertia::render("Dashboard/Articles",["articles"=>$articles]);
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

            "titre" => 'required',
            "synopsis" => 'required',
            "article" => 'required',
            "image" => 'required|image|mimes:jpg,png,jpeg|max:1999'

        ]);


        /* Exportation des nouvelles donnée dans la base de donnée */
        $article = new Articles;

        $article->type = $request->input('type');
        $article->titre = $request->input('titre');
        $article->synopsis = $request->input('synopsis');
        $article->article = $request->input('article');


        /* Recuperation de l'image et traitement */
        $filenameWithExt = $request->file('image')->getClientOriginalName();/* Recuperation du nom du ficher et de son extension */

        $filename = pathinfo($filenameWithExt, PATHINFO_FILENAME);  /* recup le nom du fichier sans l'extension */

        $extension = $request->file('image')->getClientOriginalExtension(); /* recup le l'extension du fichier */

        $fileNameToStore = $filename . '_' . time() . '.' . $extension; /* identification unique de l'images et stockage dans une variable */

        $request->file('image')->storeAs("Images/Articles", $fileNameToStore); /* Stockage de l'image dans le storage */

        $article->image = $fileNameToStore;

        $article->save();
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
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        
        $this->validate($request, [

            "titre" => 'required',
            "synopsis" => 'required',
            "article" => 'required',
           
        ]);


        /* Exportation des nouvelles donnée dans la base de donnée */
        $article = Articles::find($id);

        $article->titre = $request->input('titre');
        $article->synopsis = $request->input('synopsis');
        $article->article = $request->input('article');


        /* Recuperation de l'image et traitement */
        if ($request->hasFile("image")){
            $filenameWithExt = $request->file('image')->getClientOriginalName();/* Recuperation du nom du ficher et de son extension */

            $filename = pathinfo($filenameWithExt, PATHINFO_FILENAME);  /* recup le nom du fichier sans l'extension */
    
            $extension = $request->file('image')->getClientOriginalExtension(); /* recup le l'extension du fichier */
    
            $fileNameToStore = $filename . '_' . time() . '.' . $extension; /* identification unique de l'images et stockage dans une variable */
    
            $request->file('image')->storeAs("Images/Articles", $fileNameToStore); /* Stockage de l'image dans le storage */
    
            Storage::delete("Images/Articles/" . $article->image);/* Supression de la precedent image stocker */
        }
        else{
            $fileNameToStore = $article->image;
        }
       
        $article->image = $fileNameToStore;
        $article->update();
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $article = Articles::find($id);
        if ($article->image) {
            Storage::delete("Images/Articles/" . $article->image);
        }
        $article->delete();
    }
}
