import { AuthService, AuthMockService } from 'shared/service/auth';
import { AccountService, AccountMockService } from 'shared/service/account';
import { ActivityService, ActivityMockService } from 'shared/service/activity';
import { ContactService, ContactMockService } from 'shared/service/contact';
import { PhotoService, PhotoMockService } from 'shared/service/photo';
import { FollowService, FollowMockService } from 'shared/service/follow';

export const environment = {
  production: true,
  authService: { provide: AuthService, useClass: AuthMockService },
  AccountService: { provide: AccountService, useClass: AccountMockService },
  ActivityService: { provide: ActivityService, useClass: ActivityMockService },
  ContactService: { provide: ContactService, useClass: ContactMockService },
  FollowService: { provide: FollowService, useClass: FollowMockService },
  PhotoService: PhotoService,
  analytics: {
    id: 'UA-134451760-1'
  },
  adsense: {
    adClient: 'ca-pub-4398400415874126',
    adSlot: 8863530136
  }
};
