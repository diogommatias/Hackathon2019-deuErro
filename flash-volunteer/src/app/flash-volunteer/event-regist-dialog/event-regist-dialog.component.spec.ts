import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventRegistDialogComponent } from './event-regist-dialog.component';

describe('EventRegistDialogComponent', () => {
  let component: EventRegistDialogComponent;
  let fixture: ComponentFixture<EventRegistDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventRegistDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventRegistDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
