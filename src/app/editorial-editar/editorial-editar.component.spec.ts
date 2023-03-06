import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorialEditarComponent } from './editorial-editar.component';

describe('EditorialEditarComponent', () => {
  let component: EditorialEditarComponent;
  let fixture: ComponentFixture<EditorialEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorialEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorialEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
