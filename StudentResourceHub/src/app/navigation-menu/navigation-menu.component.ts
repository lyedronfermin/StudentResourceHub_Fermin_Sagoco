import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation-menu',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css']
})
export class NavigationMenuComponent {
  isCategoriesOpen = false;

  toggleCategories() {
    this.isCategoriesOpen = !this.isCategoriesOpen;
  }
}