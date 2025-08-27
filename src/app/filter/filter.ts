import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export type CheckItem = { id: string; label: string; count?: number };
export type FilterState = {
  duration: Set<string>;
  rating: Set<string>;
  published: Set<string>;
  level: Set<string>;
};
@Component({
  selector: 'app-filter',
  imports: [],
  templateUrl: './filter.html',
  styleUrl: './filter.scss'
})
export class Filter {
@Input() duration: CheckItem[] = [];
  @Input() rating: CheckItem[] = [];
  @Input() published: CheckItem[] = [];
  @Input() level: CheckItem[] = [];

  @Input() state: FilterState = {
    duration: new Set<string>(),
    rating: new Set<string>(),
    published: new Set<string>(),
    level: new Set<string>()
  };

  @Output() stateChange = new EventEmitter<FilterState>();

  // convenience: emit a *new* object so OnPush parents also pick changes
  private emit() {
    this.stateChange.emit({
      duration: new Set(this.state.duration),
      rating: new Set(this.state.rating),
      published: new Set(this.state.published),
      level: new Set(this.state.level)
    });
  }

  toggle(group: keyof FilterState, id: string) {
    const set = this.state[group];
    set.has(id) ? set.delete(id) : set.add(id);
    this.emit();
  }

  allChecked(group: keyof FilterState, items: CheckItem[]) {
    return items.length > 0 && items.every(i => this.state[group].has(i.id));
  }

  toggleAll(group: keyof FilterState, items: CheckItem[]) {
    const set = this.state[group];
    if (this.allChecked(group, items)) {
      items.forEach(i => set.delete(i.id));
    } else {
      items.forEach(i => set.add(i.id));
    }
    this.emit();
  }
// add inside FilterComponent class
sumCount(items: CheckItem[] = []): number {
  let s = 0;
  for (const it of items) s += it.count ?? 0;
  return s;
}

  isChecked(group: keyof FilterState, id: string) {
    return this.state[group].has(id);
  }
}