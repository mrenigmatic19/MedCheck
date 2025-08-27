import { Component, Input } from '@angular/core';


export interface CourseItem {
  title: string;
  minutes: string;
  type: 'video' | 'doc';
}

@Component({
  selector: 'app-course-item',
  imports: [],
  templateUrl: './course-item.html',
  styleUrl: './course-item.scss'
})
export class CourseItem {
  @Input() item!: CourseItem;
}
