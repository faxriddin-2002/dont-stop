import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAblityComponent } from './my-ablity.component';

describe('MyAblityComponent', () => {
  let component: MyAblityComponent;
  let fixture: ComponentFixture<MyAblityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAblityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAblityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
