import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashbanner } from './dashbanner';

describe('Dashbanner', () => {
  let component: Dashbanner;
  let fixture: ComponentFixture<Dashbanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dashbanner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dashbanner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
