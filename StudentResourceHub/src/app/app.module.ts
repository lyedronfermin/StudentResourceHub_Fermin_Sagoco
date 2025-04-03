import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common'; 

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
import { ResourceListComponent } from './resource-list/resource-list.component'; // Assuming this is needed

@NgModule({
  declarations: [
    AppComponent,
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
    ResourceListComponent, // Include ResourceListComponent in declarations
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CommonModule, // Add CommonModule to imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }