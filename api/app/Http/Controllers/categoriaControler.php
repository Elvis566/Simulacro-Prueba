<?php

namespace App\Http\Controllers;

use App\Models\categoria;
use Illuminate\Http\Request;

class categoriaControler extends Controller
{
    public function cargarCategorias(){
        $registro = categoria::all();
        return response()->json(['categorias'=>$registro], 200);
    }
}
