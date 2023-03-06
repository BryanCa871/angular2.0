import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasEditarComponent } from './compras-editar.component';

describe('ComprasEditarComponent', () => {
  let component: ComprasEditarComponent;
  let fixture: ComponentFixture<ComprasEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprasEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComprasEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
