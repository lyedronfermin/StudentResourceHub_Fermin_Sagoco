import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Resource } from '../resource.model';
import { CommonModule } from '@angular/common'; // If you use ngFor, etc.

@Component({
  selector: 'app-resource-list',
  standalone: true, // Make sure standalone is true
  imports: [CommonModule], // Add CommonModule if needed
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css']
})
export class ResourceListComponent { // Ensure it's exported
  @Input() resources: Resource[] = [];
  @Output() viewDetails = new EventEmitter<Resource>();

  viewResourceDetails(resource: Resource) { // Define the method
    this.viewDetails.emit(resource);
  }
}