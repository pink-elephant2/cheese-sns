import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityFollowingComponent } from './activity-following.component';

describe('ActivityFollowingComponent', () => {
  let component: ActivityFollowingComponent;
  let fixture: ComponentFixture<ActivityFollowingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityFollowingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityFollowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
