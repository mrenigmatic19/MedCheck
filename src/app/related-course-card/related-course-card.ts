import { Component, Input } from '@angular/core';
import { SatrCard } from "../satr-card/satr-card";
import { DecimalPipe } from '@angular/common';

export interface RelatedCourse {
  image: string;
  title: string;
  hours: string;
  updated: string;
  rating: number;
  reviews: number;
  badge?: string;
}

@Component({
  selector: 'app-related-course-card',
  imports: [SatrCard,DecimalPipe],
  templateUrl: './related-course-card.html',
  styleUrl: './related-course-card.scss'
})
export class RelatedCourseCard {
@Input() course!: RelatedCourse;
}
