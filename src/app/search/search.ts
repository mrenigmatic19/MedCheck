import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from "../course-card/course-card";
import { MetricsCard } from "../metrics-card/metrics-card";
import { Navbar } from "../navbar/navbar";
import { Filter,CheckItem ,FilterState} from '../filter/filter';


import { FormsModule } from '@angular/forms'; 
type Course = {
  id: string;
  title: string;
  rating: number;   // 0..5
  reviews: number;
  level: 'beginner'|'intermediate'|'advanced';
  months: number;   // duration in months; use 0 if < 1 month
  published: 'week'|'month'|'6m'|'year'|'all';
  badge?: 'New Launch' | '';
  img: string;
  enrolled: number;
  duration: string; 
};

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CourseCard, MetricsCard, Navbar, Filter, CommonModule, FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.scss'
})
export class Search {

  query = signal('Advanced Python Programming');

  sortOptions = ['Latest', 'Top Rated', 'Most Reviewed'];
  selectedSort = signal(this.sortOptions[0]);
courses = signal<Course[]>(
  Array.from({ length: 30 }).map((_, i) => {
    const months = [0, 1, 2, 3, 6, 9][i % 6];
    return {
      id: String(i + 1),
      title: 'Python for Data Science, AI & Development',
      rating: [3.5, 4, 4.5][i % 3],
      reviews: 133000,
      level: 'beginner',
      months,
      published: (['week','month','6m','year'] as const)[i % 4],
      badge: (i % 5 === 0) ? 'New Launch' : '',

      // ✅ fields CourseCard needs
      img: `https://picsum.photos/seed/course-${i}/400/240`,
      enrolled: 5000 + ((i * 137) % 10000),
      duration: months === 0 ? '< 1 month' : `${months} month${months > 1 ? 's' : ''}`,
    };
  })
);

  // Filter options (counts are just examples; compute from data if you like)
  durationOpts: CheckItem[] = [
    { id:'<1w', label:'<1 week', count:10 },
    { id:'1-4w', label:'1 - 4 weeks', count:20 },
    { id:'1-3m', label:'1 - 3 Months', count:30 },
    { id:'3-6m', label:'3 - 6 Months', count:50 },
    { id:'6-12m', label:'6 - 12 Months', count:50 },
  ];
  ratingOpts: CheckItem[] = [
    { id:'4.5+', label:'★★★★★ 4.5 & up', count:20 },
    { id:'4+',   label:'★★★★☆ 4 & up',   count:30 },
    { id:'3.5+', label:'★★★☆☆ 3.5 & up', count:20 },
    { id:'3+',   label:'★★★☆☆ 3 & up',   count:50 },
  ];
  publishedOpts: CheckItem[] = [
    { id:'week', label:'This week', count:10 },
    { id:'month', label:'This month', count:20 },
    { id:'6m', label:'Last 6 months', count:30 },
    { id:'year', label:'This year', count:50 },
  ];
  levelOpts: CheckItem[] = [
    { id:'beginner', label:'Beginner' },
    { id:'intermediate', label:'Intermediate' },
    { id:'advanced', label:'Advanced' },
  ];

  filters = signal<FilterState>({
    duration: new Set<string>(),
    rating: new Set<string>(),
    published: new Set<string>(),
    level: new Set<string>()
  });

  // pagination
  pageSize = 6;
  page = signal(1);

  filtered = computed(() => {
     let list = [...this.courses()];

     // duration
     if (this.filters().duration.size) {
       list = list.filter(c => {
         // map ids -> predicate
         const s = this.filters().duration;
         const ok =
           (s.has('<1w') && c.months === 0) ||
           (s.has('1-4w') && c.months === 0) ||
           (s.has('1-3m') && c.months >=1 && c.months <=3) ||
           (s.has('3-6m') && c.months >=3 && c.months <=6) ||
           (s.has('6-12m') && c.months >6 && c.months <=12);
         return ok;
       });
     }

     // rating
     if (this.filters().rating.size) {
       list = list.filter(c => {
         const s = this.filters().rating;
         return (
           (s.has('4.5+') && c.rating >= 4.5) ||
           (s.has('4+')   && c.rating >= 4.0) ||
           (s.has('3.5+') && c.rating >= 3.5) ||
           (s.has('3+')   && c.rating >= 3.0)
         );
       });
     }

     // published
     if (this.filters().published.size) {
       list = list.filter(c => this.filters().published.has(c.published));
     }

     // level
     if (this.filters().level.size) {
       list = list.filter(c => this.filters().level.has(c.level));
     }

     // sort
     const sort = this.selectedSort();
     if (sort === 'Top Rated') list.sort((a,b)=>b.rating-a.rating);
     if (sort === 'Most Reviewed') list.sort((a,b)=>b.reviews-a.reviews);

     return list;
  });

  total = computed(() => this.filtered().length);

  paged = computed(() => {
    const start = (this.page()-1)*this.pageSize;
    return this.filtered().slice(start, start + this.pageSize);
  });

  onFiltersChange(f: FilterState) {
    this.filters.set(f);
    this.page.set(1);
  }

  changeSort(opt: string) {
    this.selectedSort.set(opt);
    this.page.set(1);
  }

  pages() {
    return Math.max(1, Math.ceil(this.total()/this.pageSize));
  }
}
