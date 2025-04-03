import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { ResourceListComponent } from './resource-list/resource-list.component';
import { ResourceDetailsComponent } from './resource-details/resource-details.component';
import { ResourceCategoryComponent } from './resource-category/resource-category.component';
import { AddResourceFormComponent } from './add-resource-form/add-resource-form.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
// Import other components you want to route to

const routes: Routes = [
  { path: '', component: ResourceListComponent }, // Example: Home page
  { path: 'categories/:category', component: ResourceCategoryComponent },
  { path: 'resources/:id', component: ResourceDetailsComponent },
  { path: 'add-resource', component: AddResourceFormComponent },
  {path: 'about',component: AboutComponent},
  {path: 'home',component: HomeComponent}
  // Add other routes here, including for 'about' if you have an AboutComponent
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};