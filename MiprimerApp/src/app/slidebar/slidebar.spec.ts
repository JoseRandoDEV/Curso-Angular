import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Slidebar } from './slidebar';

describe('Slidebar', () => {
  let component: Slidebar;
  let fixture: ComponentFixture<Slidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Slidebar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Slidebar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
