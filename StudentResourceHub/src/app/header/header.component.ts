
import { Component } from '@angular/core';
import { NavigationMenuComponent } from '../navigation-menu/navigation-menu.component'; // Import NavigationMenuComponent
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavigationMenuComponent, CommonModule], // Add NavigationMenuComponent and CommonModule
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'Student Resource Hub';
  logoUrl = '/assets/logo.png'; // Optional logo URL
}