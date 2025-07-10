import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTarjeta } from './listar-tarjeta';

describe('ListarTarjeta', () => {
  let component: ListarTarjeta;
  let fixture: ComponentFixture<ListarTarjeta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarTarjeta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarTarjeta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
