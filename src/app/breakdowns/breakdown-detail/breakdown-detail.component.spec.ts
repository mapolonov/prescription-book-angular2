import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakdownDetailComponent } from './breakdown-detail.component';

describe('BreakdownDetailComponent', () => {
  let component: BreakdownDetailComponent;
  let fixture: ComponentFixture<BreakdownDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakdownDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakdownDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
