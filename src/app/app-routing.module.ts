import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ReportComponent } from './components/report/report.component';
import { NavOption2Component } from './components/nav-option2/nav-option2.component';
import { NavOption3Component } from './components/nav-option3/nav-option3.component';

const routes: Routes = [

  { path: '', redirectTo:'/home', pathMatch: 'full' },
  { path: 'home', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'report', component: ReportComponent },
  { path: 'option2', component: NavOption2Component },
  { path: 'option3', component: NavOption3Component },
  { path: 'admin/:admin-id', component: AdminComponent }

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
