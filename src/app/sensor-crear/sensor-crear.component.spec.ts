import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorCrearComponent } from './sensor-crear.component';

describe('SensorCrearComponent', () => {
  let component: SensorCrearComponent;
  let fixture: ComponentFixture<SensorCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SensorCrearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SensorCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
