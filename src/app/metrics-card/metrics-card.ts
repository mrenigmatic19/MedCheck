import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-metrics-card',
  imports: [],
  templateUrl: './metrics-card.html',
  styleUrl: './metrics-card.scss'
})
export class MetricsCard {
@Input() label = 'Metric';
  @Input() value = '0';
}
