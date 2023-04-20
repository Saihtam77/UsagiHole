<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('animes', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->string('nom');
            $table->string('date_de_diffusion');
            $table->string("auteur_oeuvre_originelle");
            $table->string("genres");
            $table->string("studio");
            $table->text("synopsis");
            $table->string("image");   
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('animes');
    }
};
