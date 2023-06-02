<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $news = News::OrderBy("created_at", "desc")->get();
        return Inertia::render("Dashboard/News", ["news" => $news]);
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
            "news" => 'required',
            "image" => 'required|image|mimes:jpg,png,jpeg|max:1999'

        ]);


        /* Exportation des nouvelles donnée dans la base de donnée */
        $news = new news;

        $news->type = $request->input('type');
        $news->titre = $request->input('titre');
        $news->synopsis = $request->input('synopsis');
        $news->news = $request->input('news');


        /* Recuperation de l'image et traitement */
        $filenameWithExt = $request->file('image')->getClientOriginalName();/* Recuperation du nom du ficher et de son extension */

        $filename = pathinfo($filenameWithExt, PATHINFO_FILENAME);  /* recup le nom du fichier sans l'extension */

        $extension = $request->file('image')->getClientOriginalExtension(); /* recup le l'extension du fichier */

        $fileNameToStore = $filename . '_' . time() . '.' . $extension; /* identification unique de l'images et stockage dans une variable */

        $request->file('image')->storeAs("Images/News", $fileNameToStore); /* Stockage de l'image dans le storage */

        $news->image = $fileNameToStore;

        $news->save();
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

        $this->validate($request, [

            "titre" => 'required',
            "synopsis" => 'required',
            "news" => 'required',
        ]);


        /* Exportation des nouvelles donnée dans la base de donnée */
        $news = News::find($id);

        $news->titre = $request->input('titre');
        $news->synopsis = $request->input('synopsis');
        $news->news = $request->input('news');


        /* Recuperation de l'image et traitement */
        if ($request->hasFile("image")) {
            $filenameWithExt = $request->file('image')->getClientOriginalName();/* Recuperation du nom du ficher et de son extension */

            $filename = pathinfo($filenameWithExt, PATHINFO_FILENAME);  /* recup le nom du fichier sans l'extension */

            $extension = $request->file('image')->getClientOriginalExtension(); /* recup le l'extension du fichier */

            $fileNameToStore = $filename . '_' . time() . '.' . $extension; /* identification unique de l'images et stockage dans une variable */

            $request->file('image')->storeAs("Images/News", $fileNameToStore); /* Stockage de l'image dans le storage */

            Storage::delete("Images/News/" . $news->image);/* Supression de la precedent image stocker */
        }
        else{
            $fileNameToStore=$news->image;
        }

        /* exportation  de l'image */
        $news->image = $fileNameToStore;
        $news->update();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $news = News::find($id);
        if ($news->image) {
            Storage::delete("Images/News/" . $news->image);
        }
        $news->delete();
    }
}
