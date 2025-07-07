import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoNoticias } from './listado-noticias';

describe('ListadoNoticias', () => {
  let component: ListadoNoticias;
  let fixture: ComponentFixture<ListadoNoticias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoNoticias]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoNoticias);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
