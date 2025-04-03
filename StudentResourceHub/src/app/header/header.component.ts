
import { Component } from '@angular/core';
import { NavigationMenuComponent } from '../navigation-menu/navigation-menu.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavigationMenuComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'Student Resource Hub';
  logoUrl = '/assets/logo.png';

  showLogo(): boolean {
    return !!this.logoUrl; // Returns true if logoUrl has a value, otherwise false
  }
}