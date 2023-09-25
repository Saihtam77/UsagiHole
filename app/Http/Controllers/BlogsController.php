<?php

namespace App\Http\Controllers;

use App\Models\Articles;
use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $articles = Articles::OrderBy("created_at", "desc")->get();
        return Inertia::render("Blogs",["articles"=>$articles]);
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
        //
    }

    /**
     * Display the specified resource.
     */
    public function showNews(string $id)
    {
        $news=News::find($id);
        return Inertia::render("New",["news"=>$news]);
    }

    public function showArticle(string $id)
    {
        $article=Articles::find($id);
        return Inertia::render("Article",["article"=>$article]);
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
