import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { ActivityYouComponent } from './activity-you.component';
import { PastDateModule } from 'shared/pipe';
import { ActivityService, ActivityMockService } from 'shared/service/activity';

describe('ActivityYouComponent', () => {
  let component: ActivityYouComponent;
  let fixture: ComponentFixture<ActivityYouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule,
        PastDateModule
      ],
      declarations: [ActivityYouComponent],
      providers: [
        { provide: ActivityService, useClass: ActivityMockService }
      ]
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
