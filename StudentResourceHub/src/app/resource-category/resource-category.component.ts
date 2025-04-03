import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Resource } from '../resource.model';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-resource-category',
  standalone: true, // Make sure standalone is true
  imports: [CommonModule], // Add CommonModule here
  templateUrl: './resource-category.component.html',
  styleUrls: ['./resource-category.component.css']
})
export class ResourceCategoryComponent {
  @Input() category: string = '';
  @Input() resources: Resource[] = [];
  @Output() viewDetails = new EventEmitter<Resource>();

  get filteredResources(): Resource[] {
    return this.resources.filter(resource => resource.category === this.category);
  }

  viewResourceDetails(resource: Resource) {
    this.viewDetails.emit(resource);
  }
}