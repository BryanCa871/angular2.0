import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoCrearComponent } from './alumno-crear.component';

describe('AlumnoCrearComponent', () => {
  let component: AlumnoCrearComponent;
  let fixture: ComponentFixture<AlumnoCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnoCrearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnoCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
