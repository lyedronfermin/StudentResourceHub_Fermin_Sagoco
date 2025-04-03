import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categoryName: string = ''; 

  updateCategoryName() {
    console.log('Category Name:', this.categoryName);
    
  }

  processCategoryName() {
    alert(`You want to explore resources for: ${this.categoryName}`);
   
  }
}