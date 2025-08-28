import { Component } from '@angular/core';
import { AdminCard } from '../admin-card/admin-card';

@Component({
  selector: 'app-admin-console',
  imports: [AdminCard],
  templateUrl: './admin-console.html',
  styleUrl: './admin-console.scss'
})
export class AdminConsole {}