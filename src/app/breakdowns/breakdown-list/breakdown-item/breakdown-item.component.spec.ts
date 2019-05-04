import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakdownItemComponent } from './breakdown-item.component';

describe('BreakdownItemComponent', () => {
  let component: BreakdownItemComponent;
  let fixture: ComponentFixture<BreakdownItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakdownItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakdownItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
