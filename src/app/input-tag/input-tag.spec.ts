import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTag } from './input-tag';

describe('InputTag', () => {
  let component: InputTag;
  let fixture: ComponentFixture<InputTag>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputTag]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputTag);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
