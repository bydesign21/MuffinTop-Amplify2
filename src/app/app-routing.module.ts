import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  // {path: 'profile', component: ProfileComponent},
  // { path: 'create/employees', component: CreateEmployeeComponent },
  // { path: 'employees', component: ReadEmployeesComponent },
  {path: 'login', component: AuthComponent},
  {path: '**', redirectTo: 'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
