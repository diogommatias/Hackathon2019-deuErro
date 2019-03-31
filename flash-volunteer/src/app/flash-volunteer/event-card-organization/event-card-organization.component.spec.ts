import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCardOrganizationComponent } from './event-card-organization.component';

describe('EventCardOrganizationComponent', () => {
  let component: EventCardOrganizationComponent;
  let fixture: ComponentFixture<EventCardOrganizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventCardOrganizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCardOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
