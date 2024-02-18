<?php

use App\Http\Controllers\categoriaControler;
use App\Http\Controllers\registroControler;
use App\Models\registro;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('registroGasto',[registroControler::class,'saveGastos']);
Route::get('getRegistro',[registroControler::class, 'getAllRegistros']);
Route::get('getRegistro/busqueda',[registroControler::class, 'busqueda']);
Route::get('getCategorizados',[registroControler::class, 'getDatosCategorizados']);
Route::get('getCateogorias', [categoriaControler::class, 'cargarCategorias']);