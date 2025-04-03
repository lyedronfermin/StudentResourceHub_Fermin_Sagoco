import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { ResourceListComponent } from './resource-list/resource-list.component';
import { ResourceDetailsComponent } from './resource-details/resource-details.component';
import { ResourceCategoryComponent } from './resource-category/resource-category.component';
import { AddResourceFormComponent } from './add-resource-form/add-resource-form.component';
import { AboutComponent } from './about/about.component';

import { HomeComponent } from './home/home.component';
import { ProgrammingComponent } from './categories/programming/programming.component';





const routes: Routes = [
  { path: '', component: ResourceListComponent }, 
  { path: 'categories/:category', component: ResourceCategoryComponent },
  { path: 'resources/:id', component: ResourceDetailsComponent },
  { path: 'add-resource', component: AddResourceFormComponent },

  {path: 'about',component: AboutComponent},
  {path: 'home',component: HomeComponent},
  
  


  { path: 'about', component: AboutComponent },
  


];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};