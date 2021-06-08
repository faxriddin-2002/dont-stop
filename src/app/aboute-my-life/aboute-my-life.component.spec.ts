import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbouteMyLifeComponent } from './aboute-my-life.component';

describe('AbouteMyLifeComponent', () => {
  let component: AbouteMyLifeComponent;
  let fixture: ComponentFixture<AbouteMyLifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbouteMyLifeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbouteMyLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
