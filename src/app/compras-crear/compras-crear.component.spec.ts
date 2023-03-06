import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasCrearComponent } from './compras-crear.component';

describe('ComprasCrearComponent', () => {
  let component: ComprasCrearComponent;
  let fixture: ComponentFixture<ComprasCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprasCrearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComprasCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
