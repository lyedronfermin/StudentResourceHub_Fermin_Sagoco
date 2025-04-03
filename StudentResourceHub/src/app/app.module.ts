<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Import RouterModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProgrammingComponent } from './categories/programming/programming.component';
import { DesignComponent } from './categories/design/design.component';
import { MathComponent } from './categories/math/math.component';
import { AboutComponent } from './about/about.component';
import { AddResourceComponent } from './add-resource/add-resource.component';
=======
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { AppComponent } from './app.component';
import { ResourceListComponent } from './resource-list/resource-list.component';
// ... other imports
>>>>>>> a0392513b8e80eb23f3345495120474eb9d4efa7

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HeaderComponent,
    NavigationMenuComponent,
    FooterComponent,
    HomeComponent,
    CategoriesComponent,
    ProgrammingComponent,
    DesignComponent,
    MathComponent,
    AboutComponent,
    AddResourceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RouterModule,     
=======
    ResourceListComponent,
    // ... other declarations
  ],
  imports: [
    BrowserModule,
    CommonModule, // Add CommonModule to imports
    // ... other imports
>>>>>>> a0392513b8e80eb23f3345495120474eb9d4efa7
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }