import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { ActivityComponent } from './activity.component';
import { ActivityFollowingComponent } from './activity-following/activity-following.component';
import { ActivityYouComponent } from './activity-you/activity-you.component';
import { PastDateModule } from 'shared/pipe';
import { AccountService, AccountMockService } from 'shared/service/account';
import { AuthService, AuthMockService } from 'shared/service/auth';
import { ActivityService, ActivityMockService } from 'shared/service/activity';
import { LoadingService } from 'shared/service/loading';

describe('ActivityComponent', () => {
  let component: ActivityComponent;
  let fixture: ComponentFixture<ActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule,
        PastDateModule
      ],
      declarations: [
        ActivityComponent,
        ActivityFollowingComponent,
        ActivityYouComponent
      ],
      providers: [
        { provide: AccountService, useClass: AccountMockService },
        { provide: AuthService, useClass: AuthMockService },
        { provide: ActivityService, useClass: ActivityMockService },
        LoadingService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
