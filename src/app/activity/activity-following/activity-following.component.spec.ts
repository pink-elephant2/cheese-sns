import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { ActivityFollowingComponent } from './activity-following.component';
import { PastDateModule } from 'shared/pipe';
import { ActivityService, ActivityMockService } from 'shared/service/activity';
import { AuthService, AuthMockService } from 'shared/service/auth';

describe('ActivityFollowingComponent', () => {
  let component: ActivityFollowingComponent;
  let fixture: ComponentFixture<ActivityFollowingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule,
        PastDateModule
      ],
      declarations: [ActivityFollowingComponent],
      providers: [
        { provide: ActivityService, useClass: ActivityMockService },
        { provide: AuthService, useClass: AuthMockService }
      ]
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
