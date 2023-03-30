import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionarVentanaComponent } from './seleccionar-ventana.component';

describe('SeleccionarVentanaComponent', () => {
  let component: SeleccionarVentanaComponent;
  let fixture: ComponentFixture<SeleccionarVentanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeleccionarVentanaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeleccionarVentanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
