import { Component, Input } from '@angular/core';
import { SatrCard } from "../satr-card/satr-card";

export interface Testimonial {
  rating: number;
  text: string;
  name: string;
  country: string;
  color: 'blue' | 'orange' | 'purple' | 'green';
  avatar?: string;
}

@Component({
  selector: 'app-testimonial-card',
  imports: [SatrCard],
  templateUrl: './testimonial-card.html',
  styleUrl: './testimonial-card.scss'
})
export class TestimonialCard {
 @Input() data!: Testimonial;
}
