import { Injectable, signal } from '@angular/core';

export type Banner = {
  id: number;
  name: string;
  url: string;
  scheduledAt?: string;
  expiryAt?: string;
  visible?: 'now'|'later';
};

@Injectable({ providedIn: 'root' })
export class BannerStore {
  private seq = 1;
  readonly banners = signal<Banner[]>([]);

  add(file: File) {
    const id = this.seq++;
    this.banners.update(bs => [...bs, { id, name: file.name, url: URL.createObjectURL(file), visible: 'now' }]);
  }
  remove(id: number) { this.banners.update(bs => bs.filter(b => b.id !== id)); }
  refresh(id: number) { this.banners.update(bs => bs.map(b => b.id === id ? ({ ...b }) : b)); }
}
