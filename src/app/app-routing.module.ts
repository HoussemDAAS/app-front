import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlatsComponent } from './plats/plats.component';
import { AddPlatComponent } from './add-plat/add-plat.component';
import { UpdatePlatComponent } from './update-plat/update-plat.component';
import { RechercheParMenuComponent } from './recherche-par-menu/recherche-par-menu.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListeMenuComponent } from './liste-menu/liste-menu.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { PlatGuard } from './services/plat.guard';

const routes: Routes = [
  {path : "plats" ,component : PlatsComponent},
  {path : "" ,component : PlatsComponent},
  {path : "add-plat" , component : AddPlatComponent , canActivate:[PlatGuard]},
  {path: "updatePlat/:id", component: UpdatePlatComponent},
  {path: "rechercheParMenu", component : RechercheParMenuComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},
  {path: "listeMenu", component : ListeMenuComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
