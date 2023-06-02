<?php
/* public */
use App\Http\Controllers\HomeController;
use App\Http\Controllers\AnimesController;
use App\Http\Controllers\CatalogueController;
use App\Http\Controllers\BlogsController;

/* Dashboard */
use App\Http\Controllers\ArticlesController;
use App\Http\Controllers\NewsController;


use App\Http\Controllers\ProfileController;

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use SebastianBergmann\CodeCoverage\Report\Html\Dashboard;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


/* Public */



Route::prefix("/")->group(function () {

    Route::resource('catalogue', CatalogueController::class);
    Route::resource('blogs', BlogsController::class);
    

    Route::get("", [HomeController::class, "index"])->name("home");
    Route::get("catalogue", [CatalogueController::class, "index"])->name("catalogue");
    Route::get("blogs", [BlogsController::class, "index"])->name("blogs");

    Route::get("contact", function () {
        return Inertia::render("Contact");
    })->name("contact");


   
});




Route::middleware(['auth','verified'])->prefix("/Dashboard")->group(function () {
    
    Route::get('board', function () {
        return Inertia::render('Dashboard/Board');
    })->name("dashboard"); 

    /* Resource */
    Route::resource('animes', AnimesController::class);
    Route::resource('articles', ArticlesController::class);
    Route::resource('news', NewsController::class);



  
    
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    
});

require __DIR__ . '/auth.php';
