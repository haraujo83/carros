<?php
declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Migration para tabela carros
 */
class CreateCarros extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(): void
    {
        Schema::create('carros', function(Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->string('nome_veiculo', 50);
            $table->string('link', 100);
            $table->smallInteger('ano');
            $table->string('combustivel', 50);
            $table->smallInteger('portas');
            $table->integer('quilometragem');
            $table->string('cambio', 50);
            $table->string('cor', 50);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(): void
    {
        Schema::drop('carros');
    }
}
