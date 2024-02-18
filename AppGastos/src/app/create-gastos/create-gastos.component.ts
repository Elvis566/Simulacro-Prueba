import { Component } from '@angular/core';
import { GastosServiciosService } from '../Servicios/gastos-servicios.service';

@Component({
  selector: 'app-create-gastos',
  standalone: true,
  imports: [],
  templateUrl: './create-gastos.component.html',
  styleUrl: './create-gastos.component.css'
})
export class CreateGastosComponent {
  listaCategorias: any
  constructor( private gastos:GastosServiciosService){}
  
  trearCategorias(){
    this.gastos.getCategorias().subscribe({
      next : (dato:any)=>{
        this.listaCategorias = dato.categorias;
      },
      error:(e)=>{
        console.log('Error al obtener datos');
      }
    })
  }

  registerGastos(descripcion:any, monto:any, fechaT:any, categoria_id:any){
    this.gastos.createGastos(descripcion.value, monto.value, fechaT.value, categoria_id.value).subscribe({
      next: (datos:any)=>{

      },
      error:(e)=>{
        console.log(e);
      }
    })
  }
}
