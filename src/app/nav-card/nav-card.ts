import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-card',
  imports: [],
  templateUrl: './nav-card.html',
  styleUrl: './nav-card.scss'
})
export class NavCard {
@Input() icon = '🔔';
  @Input() title = '';
  @Input() subtitle = '';
  @Input() tone: 'default'|'success' = 'default';
}
