import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { AboutMeComponent } from './about-me/about-me.component';
import { AbouteMyLifeComponent } from './aboute-my-life/aboute-my-life.component';
import { AppRoutingModule } from './app-routing.module';
import { ContacMeComponent } from './contac-me/contac-me.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LeftNawbarComponent } from './left-nawbar/left-nawbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MyAblityComponent } from './my-ablity/my-ablity.component'
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './footer/footer.component'; 
const routs: Routes = [
  {path: '', component: HomeComponent},
  {path: "About", component: AboutMeComponent},
  {path: 'About-my-life', component: AbouteMyLifeComponent},
  {path: 'contact-me', component: ContacMeComponent},
  {path: 'my-ablity', component: MyAblityComponent},
  {path: "**", component: NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutMeComponent,
    AbouteMyLifeComponent,
    ContacMeComponent,
    HomeComponent,
    LeftNawbarComponent,
    MyAblityComponent,
    NotFoundComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routs),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
function rout(rout: any): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

