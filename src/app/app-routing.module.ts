import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactameComponent } from './contactame/contactame.component';
import { InicioComponent } from './inicio/inicio.component';
import { OfrezcoComponent } from './ofrezco/ofrezco.component';
import { TrabajosHechosComponent } from './trabajos-hechos/trabajos-hechos.component';


const routes: Routes = [
  {path:'Inicio',component:InicioComponent},
  {path:'Trabajos',component:TrabajosHechosComponent},
  {path:'Ofrecer',component:OfrezcoComponent},
  {path:'Contacto',component:ContactameComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
