import { Component , OnInit } from '@angular/core';
import { GastosServiciosService } from '../Servicios/gastos-servicios.service';

@Component({
  selector: 'app-gastos',
  standalone: true,
  imports: [],
  templateUrl: './gastos.component.html',
  styleUrl: './gastos.component.css'
})
export class GastosComponent {
  listaGastos : any;
  constructor(private gastos:GastosServiciosService){}

  ngOnInit(){
    this.traerGastos();
  }

  traerGastos(){
    this.gastos.getGastos().subscribe({
      next : (datos:any)=>{

        this.listaGastos = datos.registro;

      },
      error:(e)=>{
        console.log('Error al obtener datos');
      }
    })
  }
  busqueda(fecha:any){
    this.gastos.getBusqueda(fecha.value).subscribe({
      next : (datos:any)=>{

        this.listaGastos = datos.registros;

      },
      error:(e)=>{
        console.log('Error al obtener datos');
      }
    })
  }
}
