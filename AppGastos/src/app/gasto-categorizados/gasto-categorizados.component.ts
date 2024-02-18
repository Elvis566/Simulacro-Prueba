import { Component } from '@angular/core';
import { GastosServiciosService } from '../Servicios/gastos-servicios.service';

@Component({
  selector: 'app-gasto-categorizados',
  standalone: true,
  imports: [],
  templateUrl: './gasto-categorizados.component.html',
  styleUrl: './gasto-categorizados.component.css'
})
export class GastoCategorizadosComponent {
  listaGastosC : any;
  constructor(private gastos:GastosServiciosService){}

  ngOnInit(){
    this.traerGastos();
  }

  traerGastos(){
    this.gastos.getGastosCategorizados().subscribe({
      next : (dato:any)=>{
        this.listaGastosC = dato.datos;
      },
      error:(e)=>{
        console.log('Error al obtener datos');
      }
    })
  }
}
