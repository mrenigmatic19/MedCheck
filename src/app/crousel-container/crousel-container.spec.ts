import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrouselContainer } from './crousel-container';

describe('CrouselContainer', () => {
  let component: CrouselContainer;
  let fixture: ComponentFixture<CrouselContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrouselContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrouselContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
