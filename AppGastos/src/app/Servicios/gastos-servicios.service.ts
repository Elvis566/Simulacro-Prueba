import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GastosServiciosService {

  constructor(private http:HttpClient ) { }

  getGastos(){
    return this.http.get('http://127.0.0.1:8000/api/getRegistro')
  }

  getGastosCategorizados(){
    return this.http.get('http://127.0.0.1:8000/api/getCategorizados')
  }

  getCategorias(){
    return this.http.get('http://127.0.0.1:8000/api/getCateogorias')
  }

  createGastos(descripcion:any, monto:any, fechaT:any, categoria_id:any){
    return this.http.post('http://127.0.0.1:8000/api/registroGasto',
    {
      descripcion:descripcion,
       monto:monto,
       fechaT:fechaT,
       categoria_id:categoria_id
    })
  }
}
