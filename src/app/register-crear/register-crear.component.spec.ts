import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCrearComponent } from './register-crear.component';

describe('RegisterCrearComponent', () => {
  let component: RegisterCrearComponent;
  let fixture: ComponentFixture<RegisterCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterCrearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
