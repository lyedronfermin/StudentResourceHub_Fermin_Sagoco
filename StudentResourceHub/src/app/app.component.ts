import { Component } from '@angular/core';


@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StudentResourceHub'; 

import { Resource } from './resource.model';
import { ResourceDetailsComponent } from './resource-details/resource-details.component'; // Import it here
import { ResourceListComponent } from './resource-list/resource-list.component';
import { ResourceCategoryComponent } from './resource-category/resource-category.component';
import { AddResourceFormComponent } from './add-resource-form/add-resource-form.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule if you haven't already
import { CommonModule } from '@angular/common'; // Important for ngIf, ngFor, etc.


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    ResourceDetailsComponent, // Add it here
    ResourceListComponent,
    ResourceCategoryComponent,
    AddResourceFormComponent,
    FormsModule, // Add FormsModule if you haven't already
    CommonModule // Important for ngIf, ngFor, etc.
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'resource-manager';
  resources: Resource[] = [
    { title: 'Angular Basics', description: 'Learn the fundamentals of Angular.', category: 'Tutorial', url: 'https://angular.io', author: 'Google', publicationDate: new Date('2023-01-01') },
    { title: 'React Guide', description: 'A comprehensive guide to React.', category: 'Article', url: 'https://reactjs.org', author: 'Facebook', publicationDate: new Date('2023-02-15') },
    // Add more sample resources
  ];
  selectedResource: Resource | null = null;
  showList = true;

  viewResourceDetails(resource: Resource) {
    this.selectedResource = resource;
    this.showList = false;
  }

  goBackToList() {
    this.selectedResource = null;
    this.showList = true;
  }

  addResource(resource: Resource) {
    this.resources.push(resource);
  }
