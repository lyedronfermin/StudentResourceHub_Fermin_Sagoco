import { Component } from '@angular/core';
import { ResourceListComponent } from '../resource-list/resource-list.component';
import { CommonModule } from '@angular/common'; // Import CommonModule

interface Resource {
  title: string;
  description: string;
  category: string;
  tag: string;
  url: string;
  author: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ResourceListComponent, CommonModule], // Add CommonModule to imports
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  resources: Resource[] = [
    { title: 'Angular Basics', description: 'Introduction to Angular framework', category: 'Programming', tag: 'Angular', url: '...', author: '...' },
    { title: 'TypeScript Guide', description: 'Deep dive into TypeScript', category: 'Design', tag: 'TypeScript', url: '...', author: '...' },
    { title: 'RxJS Observables', description: 'Understanding reactive programming', category: 'Math', tag: 'RxJS', url: '...', author: '...' },
  ];

  viewResourceDetails(resource: Resource) {
    console.log('View details for:', resource);
  
  }
}