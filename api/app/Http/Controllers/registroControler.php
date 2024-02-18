<?php

namespace App\Http\Controllers;

use App\Models\registro;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class registroControler extends Controller
{
    // Funcion de guardados de registro de gastos
    public function saveGastos(Request  $request) {
    //    validacion 
    // De esta forma nos aseguramos que el monto ingresado se un 
    // numero positivo 
    $validate= Validator::make($request->all(),
          [
            'descripcion'=>'required',
            'monto'=>'required',
            'fechaT'=>'required',
            'categoria_id'=>'required'
          ]);
          if ($validate->fails()){
            return response()->json([
            'status'=>false,
            'message'=>'Existen campos vacios',
            'errors'=>$validate->errors()
            ],401);
          }
          if($request->monto > 0){
            $registro = registro::create([
                'descripcion'=>$request->descripcion,
                'monto'=>$request->monto,
                'fechaT'=>$request->fechaT,
                'categoria_id'=>$request->categoria_id
    
            ]);
          }else{
            return response()->json([
                'status'=>false,
                'message'=>'No se puede ingresar un monto negativo'
                ],401);
          }
         
          return response()->json([
            'message'=>'Gasto creado correctamente',
            'data'=>$registro
          ],201);
        
        
    }

    public  function getAllRegistros(){
        $registro = registro::all();
        return response()->json(['registro'=>$registro], 200);

    }

    public function getDatosCategorizados(){
      $categorizados = DB::table('registros')
          ->join('categorias', 'categoria_id', '=',  'categorias.id')
          ->orderBy('categorias.categoria')
          ->select('registros.*','categorias.categoria')
          ->get();
      return response()->json(['datos'=> $categorizados]);
  }
  

    public function busqueda(Request $request){
        $fecha = $request->fecha;
        // Verificar si se proporcionó una fecha válida
        if (!$fecha) {
            return response()->json([
                'status' => false,
                'message' => 'Debe proporcionar una fecha válida'
            ], 400);
        }
        // Realizar la búsqueda de registros con la fecha proporcionada
        $registros = registro::where('fechaT', $fecha)->get();
        return response()->json(['registros' => $registros], 200);
    }
    
}

