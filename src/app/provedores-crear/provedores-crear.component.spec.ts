import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvedoresCrearComponent } from './provedores-crear.component';

describe('ProvedoresCrearComponent', () => {
  let component: ProvedoresCrearComponent;
  let fixture: ComponentFixture<ProvedoresCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvedoresCrearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvedoresCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
