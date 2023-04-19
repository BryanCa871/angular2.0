import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarSensorComponent } from './agregar-sensor.component';

describe('AgregarSensorComponent', () => {
  let component: AgregarSensorComponent;
  let fixture: ComponentFixture<AgregarSensorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarSensorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarSensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
