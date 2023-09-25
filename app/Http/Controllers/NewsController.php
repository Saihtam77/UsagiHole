<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;
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
            "thumbnail" => 'required|image|mimes:jpg,png,jpeg|max:5048', // 5MB Max
            "image" => 'required|image|mimes:jpg,png,jpeg|max:5048'

        ]);


        /* Exportation des nouvelles donnée dans la base de donnée */
        $news = new news;

        $news->type = $request->input('type');
        $news->titre = $request->input('titre');
        $news->synopsis = $request->input('synopsis');
        $news->news = $request->input('news');



        /* Recuperation de la l'image, thumbnail et traitement */

        $thumbnailWithExt = $request->file('thumbnail')->getClientOriginalName();/* Recuperation du nom du ficher et de son extension */
        $imageWithExt = $request->file('image')->getClientOriginalName();

        $thumbnail = pathinfo($thumbnailWithExt, PATHINFO_FILENAME);  /* recup le nom du fichier sans l'extension */
        $image = pathinfo($imageWithExt, PATHINFO_FILENAME);
        $thumbnailextension = $request->file('thumbnail')->getClientOriginalExtension(); /* recup le l'extension du fichier */
        $imagextension = $request->file('image')->getClientOriginalExtension();

        $thumbnailToStore = $thumbnail . '_' . time() . '.' . $thumbnailextension; /* identification unique de l'images et stockage dans une variable */
        $imageToStore = $image . '_' . time() . '.' . $imagextension;

        $request->file('thumbnail')->storeAs("Images/News/Thumbnail", $thumbnailToStore); /* Stockage de l'image dans le storage */
        $request->file('image')->storeAs("Images/News", $imageToStore);

        $news->thumbnail = $thumbnailToStore;
        $news->image = $imageToStore;

        $news->save();
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
            "thumbnail" => [
                Rule::when(
                    $request->hasFile("thumbnail"),
                    ['image|mimes:jpg,png,jpeg|max:5048']
                )
            ],
            "image" => [
                Rule::when(
                    $request->hasFile("image"),
                    ['image|mimes:jpg,png,jpeg|max:5048']
                )
            ]
        ]);


        /* Exportation des nouvelles donnée dans la base de donnée */
        $news = News::find($id);

        $news->titre = $request->input('titre');
        $news->synopsis = $request->input('synopsis');
        $news->news = $request->input('news');


        /* Recuperation de l'image et traitement */
        if ($request->hasFile("image") || $request->hasFile("thumbnail")) {
            $thumbnailWithExt = $request->file('thumbnail')->getClientOriginalName();/* Recuperation du nom du ficher et de son extension */
            $imageWithExt = $request->file('image')->getClientOriginalName();

            $thumbnail = pathinfo($thumbnailWithExt, PATHINFO_FILENAME);  /* recup le nom du fichier sans l'extension */
            $image = pathinfo($imageWithExt, PATHINFO_FILENAME);
            $thumbnailextension = $request->file('thumbnail')->getClientOriginalExtension(); /* recup le l'extension du fichier */
            $imagextension = $request->file('image')->getClientOriginalExtension();

            $thumbnailToStore = $thumbnail . '_' . time() . '.' . $thumbnailextension; /* identification unique de l'images et stockage dans une variable */
            $imageToStore = $image . '_' . time() . '.' . $imagextension;

            $request->file('thumbnail')->storeAs("Images/News/Thumbnail", $thumbnailToStore); /* Stockage de l'image dans le storage */
            $request->file('image')->storeAs("Images/News", $imageToStore);

            Storage::delete("Images/News/" . $news->image);/* Supression de la precedent image stocker */
            Storage::delete("Images/News/Thumbnail" . $news->thumbnail); // Supression de la thumbnail
        } else {
            $fileNameToStore = $news->image;
            $thumbnailToStore = $news->thumbnail;
        }

        /* exportation  de l'image */
        $news->image = $fileNameToStore;
        $news->thumbnail = $thumbnailToStore;

        $news->update();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $news = News::find($id);
        if ($news->image || $news->thumbnail) {
            Storage::delete("Images/News/" . $news->image);
            Storage::delete("Images/News/Thumbnail/" . $news->thumbnail);
        }
        $news->delete();
    }
}
