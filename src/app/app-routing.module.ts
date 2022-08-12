import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminworksComponent } from './admin/adminworks/adminworks.component';
import { HomeComponent } from './home.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'admin',component:AdminworksComponent},
  {path: 'login',component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
