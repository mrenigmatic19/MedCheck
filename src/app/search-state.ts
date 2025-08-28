import { Injectable, computed, signal } from '@angular/core';

export type Scope = 'users' | 'courses' | 'all';
export type SortKey = 'latest' | 'name_asc' | 'name_desc';

@Injectable({ providedIn: 'root' })
export class SearchState {
  // global
  readonly q = signal<string>('');
  readonly scope = signal<Scope>('courses');

  // table-ish state (reused)
  readonly sort = signal<SortKey>('latest');
  readonly page = signal(1);
  readonly pageSize = signal(10);

  // ---- DATA (demo) ----
  readonly users = signal<Array<{ name: string; roles: string[]; joined: string }>>([
    { name:'Alisha Singhla', roles:['Author','Blogger'], joined:'2022-06-15' },
    { name:'Anvita Parida', roles:['Author'], joined:'2022-06-15' },
    { name:'Ashvapati Verma', roles:['Author'], joined:'2022-06-15' },
    { name:'Balaji K P', roles:['Author','Blogger'], joined:'2022-06-15' },
    { name:'Bhavna Mishra', roles:['Author'], joined:'2022-06-15' },
    { name:'B Venkata Jagadish', roles:['Author'], joined:'2022-06-15' },
    { name:'Chandan Khare', roles:['Normal User'], joined:'2022-06-15' },
    { name:'Debopriya De', roles:['Author'], joined:'2022-06-15' },
    { name:'Dipyaman Deb', roles:['Normal User'], joined:'2022-06-15' },
    { name:'Gautam Uppal', roles:['Author'], joined:'2022-06-15' },
  ]);

  readonly courses = signal<Array<{ title: string; author: string; published: string }>>([
    { title: 'React Basics', author: 'Dan',   published: '2024-01-10' },
    { title: 'GCP Cloud Certification', author: 'Priya', published: '2023-11-03' },
    { title: 'UX Case Studies', author: 'Alex', published: '2024-04-22' },
    { title: 'Python for Data Science', author: 'Sara', published: '2022-06-01' },
  ]);

  // ---- FILTERED USERS ----
  readonly filteredUsers = computed(() => {
    const q = this.q().trim().toLowerCase();
    let list = this.users().filter(
      u => !q || u.name.toLowerCase().includes(q) || u.roles.some(r => r.toLowerCase().includes(q))
    );
    switch (this.sort()) {
      case 'name_asc':  list = [...list].sort((a,b)=>a.name.localeCompare(b.name)); break;
      case 'name_desc': list = [...list].sort((a,b)=>b.name.localeCompare(a.name)); break;
      default:          list = [...list].sort((a,b)=>+new Date(b.joined)-+new Date(a.joined));
    }
    return list;
  });
  readonly pagedUsers = computed(() => {
    const p = this.page(), ps = this.pageSize();
    return this.filteredUsers().slice((p-1)*ps, (p-1)*ps+ps);
  });
  readonly totalUsers = computed(() => this.filteredUsers().length);

  // ---- FILTERED COURSES ----
  readonly filteredCourses = computed(() => {
    const q = this.q().trim().toLowerCase();
    let list = this.courses().filter(
      c => !q || c.title.toLowerCase().includes(q) || c.author.toLowerCase().includes(q)
    );
    switch (this.sort()) {
      case 'name_asc':  list = [...list].sort((a,b)=>a.title.localeCompare(b.title)); break;
      case 'name_desc': list = [...list].sort((a,b)=>b.title.localeCompare(a.title)); break;
      default:          list = [...list].sort((a,b)=>+new Date(b.published)-+new Date(a.published));
    }
    return list;
  });
  readonly pagedCourses = computed(() => {
    const p = this.page(), ps = this.pageSize();
    return this.filteredCourses().slice((p-1)*ps, (p-1)*ps+ps);
  });
  readonly totalCourses = computed(() => this.filteredCourses().length);

  // ---- ACTIONS ----
  setQuery(v: string) { this.q.set(v); this.page.set(1); }
  setScope(s: Scope)  { this.scope.set(s); }
  setSort(s: SortKey) { this.sort.set(s); this.page.set(1); }
  setPage(p: number)  { this.page.set(p); }
  setPageSize(n: number){ this.pageSize.set(n); this.page.set(1); }
}
