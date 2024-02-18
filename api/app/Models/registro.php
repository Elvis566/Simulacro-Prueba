<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class registro extends Model
{
    use HasFactory;
    protected $table ='registros';
    public $timestamps=false;
    protected $fillable = [
        'descripcion',
        'monto',
        'fechaT',
        'categoria_id'
    ];

}
