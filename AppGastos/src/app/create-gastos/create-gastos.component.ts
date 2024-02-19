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
  formulario : any
  constructor( private gastos:GastosServiciosService){}
  
  ngOnInit(){
    this.trearCategorias();
  }

  trearCategorias(){
    this.gastos.getCategorias().subscribe({
      next : (dato:any)=>{
        this.listaCategorias = dato.categorias;
        console.log(this.listaCategorias[1].id);
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

   limpiarFormulario() {
    // Obtener el formulario por su ID
     this.formulario = document.getElementById("miFormulario");

    // Recorrer los elementos del formulario y establecer su valor a una cadena vacía
    for (var i = 0; i < this.formulario.elements.length; i++) {
      var elemento = this.formulario.elements[i];
      if (elemento.type !== "button") { // Excluir el botón del formulario
        elemento.value = "";
      }
    }
  }
}
