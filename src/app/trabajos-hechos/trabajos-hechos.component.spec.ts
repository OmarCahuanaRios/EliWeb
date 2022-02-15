import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajosHechosComponent } from './trabajos-hechos.component';

describe('TrabajosHechosComponent', () => {
  let component: TrabajosHechosComponent;
  let fixture: ComponentFixture<TrabajosHechosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrabajosHechosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajosHechosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
