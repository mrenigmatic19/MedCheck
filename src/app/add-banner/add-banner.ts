import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerStore } from '../addbanner';

@Component({
  selector: 'app-add-banner',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="dd" (dragover)="onOver($event)" (drop)="onDrop($event)">
    <input #file type="file" accept="image/*" (change)="onPick($event)" hidden>
    <div class="dd-inner" (click)="file.click()">
      <div class="icon">🖼️</div>
      <div class="text">Drag and Drop files here, or <span class="link">Choose file</span>.</div>
    </div>
  </div>
  `,
  styles: [`
    .dd{border-radius:12px;border:1px solid #334255;background:#222a3a;height:120px;display:flex;align-items:center;justify-content:center}
    .dd-inner{text-align:center;cursor:pointer;color:#a9b6c9}
    .icon{font-size:28px;margin-bottom:6px}
    .link{color:#8ddcff}
  `]
})
export class AddBanner {
  private store: BannerStore = inject(BannerStore);   // ✅ explicit type
  file = viewChild.required<ElementRef<HTMLInputElement>>('file');

  onPick(e: Event) {
    const f = (e.target as HTMLInputElement).files?.[0];
    if (f) this.store.add(f);
    this.file().nativeElement.value = '';
  }
  onOver(ev: DragEvent){ ev.preventDefault(); }
  onDrop(ev: DragEvent){
    ev.preventDefault();
    const f = ev.dataTransfer?.files?.[0];
    if (f) this.store.add(f);
  }
}
