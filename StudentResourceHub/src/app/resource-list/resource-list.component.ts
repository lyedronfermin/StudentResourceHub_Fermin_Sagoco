import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css']
})
export class ResourceListComponent {
  @Input() resources: any[] | undefined; // Assuming 'any[]' for simplicity; create a proper interface

  viewDetails(resourceId: number) {
    console.log(`View details for ${resourceId}`);
    // Implement navigation to resource details
  }
}
