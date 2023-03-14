import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alumno2Component } from './alumno2.component';

describe('Alumno2Component', () => {
  let component: Alumno2Component;
  let fixture: ComponentFixture<Alumno2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Alumno2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Alumno2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
