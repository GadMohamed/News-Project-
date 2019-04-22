import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactsComponent } from './contacts/contacts.component';
import { GalleryComponent } from './gallery/gallery.component';
import {Routes , RouterModule} from '@angular/router'
import {HttpClientModule} from '@angular/common/http';
import { GenderPipe } from './gender.pipe';
import { SeemorePipe } from './seemore.pipe';
import { SearchPipe } from './search.pipe'
import {FormsModule} from '@angular/forms'
const appRoutes:Routes = 
[
  {path:'', component:HomeComponent},  
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'contacts', component:ContactsComponent},
  {path:'gallery', component:GalleryComponent},
  {path:'**', component:HomeComponent},
  
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    ContactsComponent,
    GalleryComponent,
    GenderPipe,
    SeemorePipe,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
