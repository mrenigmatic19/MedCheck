import { Component, Input } from '@angular/core';

export interface Course {
  title: string;
  img: string;
  rating: number | string;
  reviews: number | string;
  enrolled: number | string;
  level: string;
  duration: string;
  progress?: string;
}
@Component({
  selector: 'app-course-card',
  standalone: true,
  templateUrl: './course-card.html',
  styleUrls: ['./course-card.scss']
})
export class CourseCard {
  @Input() course!: Course;

}
