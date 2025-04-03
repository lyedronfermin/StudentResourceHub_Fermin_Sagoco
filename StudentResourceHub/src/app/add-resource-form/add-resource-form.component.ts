import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-resource-form',
  templateUrl: './add-resource-form.component.html',
  styleUrls: ['./add-resource-form.component.css']
})
export class AddResourceFormComponent {
  @Output() addResource = new EventEmitter<any>(); // Assuming 'any' for simplicity; create a proper interface

  title: string = '';
  description: string = '';
  url: string = '';
  category: string = '';
  author: string = '';

  onSubmit() {
    this.addResource.emit({
      title: this.title,
      description: this.description,
      url: this.url,
      category: this.category,
      author: this.author
    });
    // Clear form fields
    this.title = '';
    this.description = '';
    this.url = '';
    this.category = '';
    this.author = '';
  }
}
