import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesCertificationsComponent } from './courses-certifications.component';

describe('CoursesCertificationsComponent', () => {
  let component: CoursesCertificationsComponent;
  let fixture: ComponentFixture<CoursesCertificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesCertificationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesCertificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
