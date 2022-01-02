import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component';
import { UpdateEtudiantComponent } from './update-etudiant/update-etudiant.component';
import { RechercheParInstitutComponent } from './recherche-par-institut/recherche-par-institut.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { EtudiantGuard } from './etudiant.guard';


const routes: Routes = [
  {path: "etudiants", component : EtudiantsComponent},
  {path: "updateEtudiant/:id",  component: UpdateEtudiantComponent},
  { path: "", redirectTo: "etudiants", pathMatch: "full" },
  {path: "rechercheParInstitut", component : RechercheParInstitutComponent},
  {path: 'forbidden', component: ForbiddenComponent},
  {path : "add-etudiant", component : AddEtudiantComponent, canActivate:[EtudiantGuard]},
  {path: 'login', component: LoginComponent}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
