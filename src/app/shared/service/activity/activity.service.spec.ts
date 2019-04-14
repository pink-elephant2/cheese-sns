import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { ActivityService } from './activity.service';
import { ActivityMockService } from './activity-mock.service';

describe('ActivityService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
    ],
    providers: [
      { provide: ActivityService, useClass: ActivityMockService }
    ]
  }));

  it('should be created', () => {
    const service: ActivityService = TestBed.get(ActivityService);
    expect(service).toBeTruthy();
  });
});
