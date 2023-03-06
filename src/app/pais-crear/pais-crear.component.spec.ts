import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisCrearComponent } from './pais-crear.component';

describe('PaisCrearComponent', () => {
  let component: PaisCrearComponent;
  let fixture: ComponentFixture<PaisCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisCrearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaisCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
