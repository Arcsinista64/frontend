import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [

  { path: '', redirectTo:'/home', pathMatch: 'full' },
  { path: 'home', component: AppComponent },

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
