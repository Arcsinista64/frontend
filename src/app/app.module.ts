import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MapComponent } from './components/map/map.component';
import { AsideComponent } from './components/aside/aside.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ReportComponent } from './components/report/report.component';

import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MapComponent,
    AsideComponent,
    MenuComponent,
    LoginComponent,
    SignUpComponent,
    ReportComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDY7CPzQS0Fhcwr60fqAhiq4NAl8jxUhog'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent, SignUpComponent, ReportComponent]
})
export class AppModule { }
