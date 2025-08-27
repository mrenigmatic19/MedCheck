import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedCourseCard } from './related-course-card';

describe('RelatedCourseCard', () => {
  let component: RelatedCourseCard;
  let fixture: ComponentFixture<RelatedCourseCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatedCourseCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatedCourseCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
