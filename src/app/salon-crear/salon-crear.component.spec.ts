import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalonCrearComponent } from './salon-crear.component';

describe('SalonCrearComponent', () => {
  let component: SalonCrearComponent;
  let fixture: ComponentFixture<SalonCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalonCrearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalonCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
