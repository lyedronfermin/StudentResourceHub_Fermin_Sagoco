import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Resource } from '../resource.model';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-resource-list',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css']
})
export class ResourceListComponent { 
  @Input() resources: Resource[] = [];
  @Output() viewDetails = new EventEmitter<Resource>();

  viewResourceDetails(resource: Resource) { 
    this.viewDetails.emit(resource);
  }
}