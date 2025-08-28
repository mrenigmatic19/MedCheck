import { Component, inject } from '@angular/core';
import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';
import { SearchState } from '../search-state';

@Component({
  selector: 'app-admin-users',
  standalone: true,
  imports: [CommonModule, DecimalPipe, DatePipe],
  templateUrl: './admin-users.html',
  styleUrls: ['./admin-users.scss']
})
export class AdminUsers {
  s = inject(SearchState);

  pages() {
    const total = this.s.filteredUsers().length;
    const ps = this.s.pageSize();
    return Math.max(1, Math.ceil(total / ps));
  }
}

