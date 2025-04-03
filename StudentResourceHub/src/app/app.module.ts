import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { AppComponent } from './app.component';
import { ResourceListComponent } from './resource-list/resource-list.component';
// ... other imports

@NgModule({
  declarations: [
    AppComponent,
    ResourceListComponent,
    // ... other declarations
  ],
  imports: [
    BrowserModule,
    CommonModule, // Add CommonModule to imports
    // ... other imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }