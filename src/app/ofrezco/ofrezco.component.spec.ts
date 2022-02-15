import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfrezcoComponent } from './ofrezco.component';

describe('OfrezcoComponent', () => {
  let component: OfrezcoComponent;
  let fixture: ComponentFixture<OfrezcoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfrezcoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfrezcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
