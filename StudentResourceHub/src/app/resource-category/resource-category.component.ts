import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resource-category',
  templateUrl: './resource-category.component.html',
  styleUrls: ['./resource-category.component.css']
})
export class ResourceCategoryComponent {
  @Input()
  category!: string;
  @Input()
  resources!: any[]; // Assuming 'any[]' for simplicity; create a proper interface

  get filteredResources() {
    return this.resources.filter(resource => resource.category === this.category);
  }
}
