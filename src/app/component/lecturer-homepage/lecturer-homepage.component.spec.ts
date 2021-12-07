import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturerHomepageComponent } from './lecturer-homepage.component';

describe('LecturerHomepageComponent', () => {
  let component: LecturerHomepageComponent;
  let fixture: ComponentFixture<LecturerHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LecturerHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturerHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
