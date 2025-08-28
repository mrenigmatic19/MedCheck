import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../navbar/navbar';
import { AddBanner } from '../add-banner/add-banner';
import { BannerStore } from '../addbanner';

type SortKey = 'latest' | 'name_asc' | 'name_desc';

@Component({
  selector: 'app-admin-settings',
  standalone: true,
  imports: [CommonModule, Navbar, AddBanner],
  templateUrl: './admin-settings.html',
  styleUrls: ['./admin-settings.scss'],
})
export class AdminSettings {
  // Tabs
  tab = signal<'users' | 'banners'>('users');

  // Users state
  q = signal('');
  sort = signal<SortKey>('latest');
  page = signal(1);
  pageSize = signal(10);

  users = signal(
    Array.from({ length: 55 }).map((_, i) => ({
      name:
        [
          'Alisha Singhla',
          'Anvita Parida',
          'Ashvapati Verma',
          'Balaji K P',
          'Bhavna Mishra',
          'B Venkata Jagadish',
          'Chandan Khare',
          'Debopriya De',
          'Dipyaman Deb',
          'Gautam Uppal',
        ][i % 10] + (i > 9 ? ' ' + (i + 1) : ''),
      roles: i % 3 === 0 ? ['Author', 'Blogger'] : i % 3 === 1 ? ['Author'] : ['Normal User'],
      joined: '2022-06-15',
    }))
  );

  filtered = computed(() => {
    const q = this.q().trim().toLowerCase();
    let list = this.users().filter(
      (u) => !q || u.name.toLowerCase().includes(q) || u.roles.some((r) => r.toLowerCase().includes(q))
    );
    switch (this.sort()) {
      case 'name_asc':  list = [...list].sort((a,b)=>a.name.localeCompare(b.name)); break;
      case 'name_desc': list = [...list].sort((a,b)=>b.name.localeCompare(a.name)); break;
      default:          list = [...list];
    }
    return list;
  });
  total   = computed(() => this.filtered().length);
  pages   = computed(() => Math.max(1, Math.ceil(this.total() / this.pageSize())));
  paged   = computed(() => {
    const p = this.page(), ps = this.pageSize();
    return this.filtered().slice((p - 1) * ps, (p - 1) * ps + ps);
  });

  setQuery(v: string) { this.q.set(v); this.page.set(1); }
  setSort(v: SortKey) { this.sort.set(v); this.page.set(1); }
  setPage(v: number)  { this.page.set(Math.min(Math.max(1, v), this.pages())); }

  // Edit modal
  showEdit = signal(false);
  currentUser = signal<{name:string;roles:string[];joined:string}|null>(null);
  openEdit(u:any){ this.currentUser.set(u); this.showEdit.set(true); }
  closeEdit(){ this.showEdit.set(false); }

  // Banners
  store = inject(BannerStore);
  onVisibleChange(val: 'now'|'later') {
    this.store.banners.update(bs => bs.map(b => ({ ...b, visible: val })));
  }
  onScheduleChange(val: string) {
    this.store.banners.update(bs => bs.map(b => ({ ...b, scheduledAt: val })));
  }
  onExpiryChange(val: string) {
    this.store.banners.update(bs => bs.map(b => ({ ...b, expiryAt: val })));
  }
}
