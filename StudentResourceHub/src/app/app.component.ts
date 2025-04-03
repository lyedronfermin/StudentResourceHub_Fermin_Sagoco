import { Component } from '@angular/core';
import { Resource } from './resource.model';
import { ResourceDetailsComponent } from './resource-details/resource-details.component';
import { ResourceListComponent } from './resource-list/resource-list.component';
import { ResourceCategoryComponent } from './resource-category/resource-category.component';
import { AddResourceFormComponent } from './add-resource-form/add-resource-form.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component'; // Import NavigationMenuComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ResourceDetailsComponent,
    ResourceListComponent,
    ResourceCategoryComponent,
    AddResourceFormComponent,
    FormsModule,
    CommonModule,
    HeaderComponent,
    FooterComponent,
    RouterModule,
    NavigationMenuComponent // Add NavigationMenuComponent to imports
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'resource-manager';
  resources: Resource[] = [
    // ... your resources
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
}