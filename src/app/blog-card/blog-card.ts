import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-card',
  imports: [],
  templateUrl: './blog-card.html',
  styleUrl: './blog-card.scss'
})
export class BlogCard {
  @Input() title = 'Data Analyst';
  @Input() img = 'assets/blog1.jpg';
  @Input() tags = 'Spreadsheet, SQL, Data Viz, Data Cleansing';
  @Input() author = 'Ritu LNU';
  @Input() role = 'DEV · OPS';
  @Input() rating = '4.3';
  @Input() reviews = '133k reviews';
}
