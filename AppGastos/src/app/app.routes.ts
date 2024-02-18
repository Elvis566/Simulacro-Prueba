import { Routes } from '@angular/router';
import { GastosComponent } from './gastos/gastos.component';
import { GastoCategorizadosComponent } from './gasto-categorizados/gasto-categorizados.component';

export const routes: Routes = [
    { path: 'gastos', component: GastosComponent},
    { path: 'categorias', component:GastoCategorizadosComponent}
];
