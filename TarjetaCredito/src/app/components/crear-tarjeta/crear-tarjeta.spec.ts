import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTarjeta } from './crear-tarjeta';

describe('CrearTarjeta', () => {
  let component: CrearTarjeta;
  let fixture: ComponentFixture<CrearTarjeta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearTarjeta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearTarjeta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
