import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatrCard } from './satr-card';

describe('SatrCard', () => {
  let component: SatrCard;
  let fixture: ComponentFixture<SatrCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SatrCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SatrCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
