import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorEditarComponent } from './autor-editar.component';

describe('AutorEditarComponent', () => {
  let component: AutorEditarComponent;
  let fixture: ComponentFixture<AutorEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutorEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutorEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
