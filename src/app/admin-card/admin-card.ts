import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-admin-card',
  standalone: true,
  template: `
    <div class="card">
      <div class="icon">{{ icon }}</div>
      <div class="content">
        <h3>{{ title }}</h3>
        <p *ngIf="value">{{ value }}</p>
      </div>
    </div>
  `,
  styleUrls: ['./admin-card.scss']
})
export class AdminCard {
  @Input() title!: string;
  @Input() icon!: string;
  @Input() value?: string | number;
}
