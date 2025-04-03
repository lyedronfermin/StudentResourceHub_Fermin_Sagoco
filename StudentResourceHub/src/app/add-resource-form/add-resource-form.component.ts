import { Component, Output, EventEmitter } from '@angular/core';
import { Resource } from '../resource.model';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common'; // If you use ngFor, etc.

@Component({
  selector: 'app-add-resource-form',
  standalone: true, // Ensure standalone is true
  imports: [FormsModule, CommonModule], // Add FormsModule and CommonModule
  templateUrl: './add-resource-form.component.html',
  styleUrls: ['./add-resource-form.component.css']
})
export class AddResourceFormComponent {
  @Output() resourceAdded = new EventEmitter<Resource>();

  newResource: Resource = {
    title: '',
    description: '',
    category: '',
    url: '',
    author: '',
    publicationDate: new Date()
  };

  categories: string[] = ['Tutorial', 'Article', 'Documentation', 'Video']; // Example categories

  addResource() {
    this.resourceAdded.emit(this.newResource);
    this.newResource = { 
      title: '', 
      description: '', 
      category: '', 
      url: '', 
      author: '', 
      publicationDate: new Date() 
    };
  }

  cancel() {
    this.newResource = { 
      title: '', 
      description: '', 
      category: '', 
      url: '', 
      author: '', 
      publicationDate: new Date() 
    };
  }
}