import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { CrearComponent } from './componentes/crear/crear.component';
import { ListarComponent } from './componentes/listar/listar.component';


const routes: Routes = [
  {
    path: '',
    component: ListarComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'crear',
    component: CrearComponent
  },
  {
    path: 'listar',
    component: ListarComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
