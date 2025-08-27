import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgLogin } from './svg-login';

describe('SvgLogin', () => {
  let component: SvgLogin;
  let fixture: ComponentFixture<SvgLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgLogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgLogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
