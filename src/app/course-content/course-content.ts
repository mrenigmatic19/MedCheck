import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseItem } from '../course-item/course-item';
import { CourseCard } from "../course-card/course-card";

export interface CourseSection {
  title: string;
  minutes: string;
  items: CourseItem[];
}@Component({
  selector: 'app-course-content',
  imports: [CourseCard,CourseItem],
  templateUrl: './course-content.html',
  styleUrl: './course-content.scss'
})
export class CourseContent {
@Input() section!: CourseSection;
@Output() selectLecture = new EventEmitter<{ index:number; item: CourseItem }>();

}
