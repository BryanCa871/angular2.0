import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalonEditarComponent } from './salon-editar.component';

describe('SalonEditarComponent', () => {
  let component: SalonEditarComponent;
  let fixture: ComponentFixture<SalonEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalonEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalonEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
