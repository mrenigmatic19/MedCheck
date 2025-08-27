import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseLanding } from './course-landing';

describe('CourseLanding', () => {
  let component: CourseLanding;
  let fixture: ComponentFixture<CourseLanding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseLanding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseLanding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
