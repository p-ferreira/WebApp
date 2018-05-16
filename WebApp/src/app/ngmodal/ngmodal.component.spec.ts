import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NGModalComponent } from './ngmodal.component';

describe('NGModalComponent', () => {
  let component: NGModalComponent;
  let fixture: ComponentFixture<NGModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NGModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NGModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
