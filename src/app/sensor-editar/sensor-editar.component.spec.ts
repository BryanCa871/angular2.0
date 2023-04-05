import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorEditarComponent } from './sensor-editar.component';

describe('SensorEditarComponent', () => {
  let component: SensorEditarComponent;
  let fixture: ComponentFixture<SensorEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SensorEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SensorEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
