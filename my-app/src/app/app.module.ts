import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';


import { HomeComponent } from './header/home/home.component';
import { NatureComponent } from './header/nature/nature.component';
import { AnimalsComponent } from './header/animals/animals.component';
import { CarsComponent } from './header/cars/cars.component';
import { CityComponent } from './header/city/city.component';
import { NotFoundComponent } from './header/not-found/not-found.component';
import { AdminComponent } from './header/ADMIN/admin/admin.component';
import { RegistrationComponent } from './header/registration/registration.component';




const appRoutes: Routes =[
  { path:'', component:HomeComponent },
  {path:'Nature', component:NatureComponent},
  {path:'Animals',component:AnimalsComponent},
  {path:'Cars',component:CarsComponent},
  {path:'City',component:CityComponent},
  {path:'Registration',component:RegistrationComponent},
  {path:'**',component:NotFoundComponent},
];



@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,



    HomeComponent,


    NatureComponent,


    AnimalsComponent,


    CarsComponent,


    CityComponent,


    NotFoundComponent,


    AdminComponent,


    RegistrationComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
