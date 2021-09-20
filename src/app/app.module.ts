import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './layouts/auth/auth.component';
import {HttpClientModule} from '@angular/common/http';
import { DisplayComponent } from './layouts/display/display.component';
import { NavbarComponent } from './share/ui/navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    DisplayComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
