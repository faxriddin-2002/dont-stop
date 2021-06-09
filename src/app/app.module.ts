import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MyAblityComponent } from './my-ablity/my-ablity.component';
import { AbouteMyLifeComponent } from './aboute-my-life/aboute-my-life.component';
import { ContacMeComponent } from './contac-me/contac-me.component';
import { LeftNawbarComponent } from './left-nawbar/left-nawbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutMeComponent,
    MyAblityComponent,
    AbouteMyLifeComponent,
    ContacMeComponent,
    LeftNawbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
