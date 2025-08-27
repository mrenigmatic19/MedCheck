import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { CarouselModule, CarouselResponsiveOptions, Carousel } from 'primeng/carousel';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-crousel-container',
  imports: [Carousel],
  templateUrl: './crousel-container.html',
  styleUrl: './crousel-container.scss'
})
export class CrouselContainer {
@Input() items: any[] = [];
  @Input() numVisible = 4;
  @Input() numScroll = 1;
  @Input() circular = false;
  @Input() showIndicators = false;
  @Input() responsiveOptions: CarouselResponsiveOptions[] = [
    { breakpoint: '1199px', numVisible: 3, numScroll: 1 },
    { breakpoint: '991px',  numVisible: 2, numScroll: 1 },
    { breakpoint: '575px',  numVisible: 1, numScroll: 1 }
  ];

  // the consumer provides this template
  @ContentChild(TemplateRef) itemTemplate!: TemplateRef<any>;
}