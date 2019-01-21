import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityYouComponent } from './activity-you.component';

describe('ActivityYouComponent', () => {
  let component: ActivityYouComponent;
  let fixture: ComponentFixture<ActivityYouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityYouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
