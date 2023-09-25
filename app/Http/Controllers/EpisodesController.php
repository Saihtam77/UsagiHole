<?php

namespace App\Http\Controllers;

use App\Models\Animes;
use App\Models\Episodes;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EpisodesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $animes = Animes::OrderBy("created_at", "desc")->get();
        $episodes = Episodes::OrderBy("created_at", "desc")->get();
        return Inertia::render("Dashboard/Episodes", ["animes" => $animes, "episodes" => $episodes]);
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


            "numero" => 'required',
            "video" => 'required|mimes:mp4',


        ]);

        if ($request->hasFile('video')) {
            $filenameWithExt = $request->file('video')->getClientOriginalName();
            $filename = pathinfo($filenameWithExt, PATHINFO_FILENAME);
            $extension = $request->file('video')->getClientOriginalExtension();
            $fileNameToStore = $filename . '_' . time() . '.' . $extension;

            $path = $request->file('video')->storeAs('Animes/Episodes/', $fileNameToStore);
        }


        $episode = new Episodes();
        $episode->titre = $request->input('titre');
        $episode->numero = $request->input('numero');
        $episode->video = $fileNameToStore;

        $episode->anime_id = $request->input('anime_id');

        $episode->save();
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
