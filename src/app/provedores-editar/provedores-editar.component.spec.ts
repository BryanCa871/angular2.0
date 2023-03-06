import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvedoresEditarComponent } from './provedores-editar.component';

describe('ProvedoresEditarComponent', () => {
  let component: ProvedoresEditarComponent;
  let fixture: ComponentFixture<ProvedoresEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvedoresEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvedoresEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
