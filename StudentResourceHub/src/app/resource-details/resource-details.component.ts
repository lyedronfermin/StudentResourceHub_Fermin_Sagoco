import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Resource } from '../resource.model';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-resource-details',
  standalone: true, // Ensure standalone is true
  imports: [CommonModule], // Add CommonModule here
  templateUrl: './resource-details.component.html',
  styleUrls: ['./resource-details.component.css']
})
export class ResourceDetailsComponent {
  @Input() resource: Resource | null = null;
  @Output() backToList = new EventEmitter<void>();

  goBackToList() {
    this.backToList.emit();
  }
}