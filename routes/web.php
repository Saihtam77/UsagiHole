<?php

use App\Http\Controllers\AnimesController;
use App\Http\Controllers\CatalogueController;
use App\Http\Controllers\HomeController;
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

    Route::get("", [HomeController::class, "index"])->name("Home");

    Route::get("contact", function () {
        return Inertia::render("Contact");
    })->name("contact");


    Route::get("/catalogue", [CatalogueController::class, "index"])->name("catalogue");
});




Route::middleware(['auth','verified'])->prefix("/Dashboard")->group(function () {

    Route::get('/board', function () {
        return Inertia::render('Dashboard/Board');
    })->name("dashboard");

    Route::get('/animes', function () {
        return Inertia::render('Dashboard/Animes');
    })->name("dashboard_animes");
    
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    /* Resource */
    Route::resource('animes', AnimesController::class);
});

require __DIR__ . '/auth.php';
