import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationMenComponent } from './navigation-men.component';

describe('NavigationMenComponent', () => {
  let component: NavigationMenComponent;
  let fixture: ComponentFixture<NavigationMenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationMenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationMenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
