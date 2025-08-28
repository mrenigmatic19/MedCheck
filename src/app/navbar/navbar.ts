import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchState } from '../search-state';
import { NavCard } from '../nav-card/nav-card';

type Role = 'admin' | 'author' | 'user';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, NavCard],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
})
export class Navbar {
  // dropdown state
  showNoti = signal(false);
  showProfile = signal(false);

  // RBAC role (set from auth after login)
  role = signal<Role>('admin');

  // shared search
  private s = inject(SearchState);

  // current query & scope
  q = computed(() => this.s.q());
  scope = computed(() => this.s.scope());

  // typeahead suggestions (first 4)
  suggestions = computed(() =>
    this.scope() === 'users'
      ? this.s.filteredUsers().slice(0, 4).map(u => ({
          line1: u.name,
          line2: u.roles.join(' • '),
          kind: 'user' as const
        }))
      : this.s.filteredCourses().slice(0, 4).map(c => ({
          line1: c.title,
          line2: `by ${c.author}`,
          kind: 'course' as const
        }))
  );

  // UI state
  showSuggest = signal(false);
  private hideTimer: any;

  // search handlers
  onQuery(val: string) {
    if (this.scope() === 'all') this.s.setScope('courses');
    this.s.setQuery(val);
    this.showSuggest.set(val.trim().length > 0);
  }
  clearSearch() {
    this.s.setQuery('');
    this.showSuggest.set(false);
  }
  setScope(s: 'users' | 'courses' | 'all') {
    this.s.setScope(s);
    if (this.q()) this.showSuggest.set(true);
  }
  // prevent blur race on click
  pickSuggestion(ev: MouseEvent, sug: { line1: string; kind: 'user' | 'course' }) {
    ev.preventDefault();
    this.s.setQuery(sug.line1);
    this.showSuggest.set(false);
    // Optionally navigate by kind
    // this.router.navigate(['/search'], { queryParams: { q: sug.line1, scope: this.scope() }});
  }
  hideSuggestSoon() {
    clearTimeout(this.hideTimer);
    this.hideTimer = setTimeout(() => this.showSuggest.set(false), 120);
  }

  // toggles
  toggleNoti()    { this.showNoti.update(v => !v); this.showProfile.set(false); }
  toggleProfile() { this.showProfile.update(v => !v); this.showNoti.set(false); }

  // RBAC helpers
  canSeeAdmin  = computed(() => this.role() === 'admin');
  trackByLine1 = (i: number, item: { line1: string }) => item.line1;
  canSeeAllCourses = computed(() => this.role() !== 'admin');
}
