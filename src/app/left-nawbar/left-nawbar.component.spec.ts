import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftNawbarComponent } from './left-nawbar.component';

describe('LeftNawbarComponent', () => {
  let component: LeftNawbarComponent;
  let fixture: ComponentFixture<LeftNawbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftNawbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftNawbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
