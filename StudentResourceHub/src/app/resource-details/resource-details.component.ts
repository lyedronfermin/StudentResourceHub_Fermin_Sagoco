import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-resource-details',
  templateUrl: './resource-details.component.html',
  styleUrls: ['./resource-details.component.css']
})
export class ResourceDetailsComponent {
  @Input() resource: any; // Assuming 'any' for simplicity; create a proper interface
  @Output() backToList = new EventEmitter<void>();

  onBackToList() {
    this.backToList.emit();
  }
}
