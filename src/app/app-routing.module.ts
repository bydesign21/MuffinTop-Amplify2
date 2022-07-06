import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ReadEmployeesComponent } from './read-employees/read-employees.component';

const routes: Routes = [
  // {path: 'profile', component: ProfileComponent},
  // { path: 'create/employees', component: CreateEmployeeComponent },
  // { path: 'employees', component: ReadEmployeesComponent },
  {path: 'login', component: AuthComponent},
  {path: '**', redirectTo: 'login', pathMatch:'full'},
  {path: 'employees', component: ReadEmployeesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
