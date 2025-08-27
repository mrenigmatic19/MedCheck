import { Component, Input } from '@angular/core';
import { DecimalPipe } from '@angular/common';
@Component({
  selector: 'app-satr-card',
  imports: [DecimalPipe],
  templateUrl: './satr-card.html',
  styleUrl: './satr-card.scss'
})
export class SatrCard {
 @Input() rating = 0;
  get fullStars() { return Math.floor(this.rating); }
  get hasHalf() { return this.rating - Math.floor(this.rating) >= 0.5; }
  get stars() { return Array(5); }

}
