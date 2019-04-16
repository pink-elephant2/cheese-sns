import { AuthService, AuthMockService } from 'shared/service/auth';
import { AccountService, AccountMockService } from 'shared/service/account';
import { ActivityService, ActivityMockService } from 'shared/service/activity';
import { ContactService, ContactMockService } from 'shared/service/contact';
import { PhotoService, PhotoMockService } from 'shared/service/photo';
import { FollowService, FollowMockService } from 'shared/service/follow';

export const environment = {
  production: true,
  authService: { provide: AuthService, useClass: AuthMockService },
  accountService: { provide: AccountService, useClass: AccountMockService },
  activityService: { provide: ActivityService, useClass: ActivityMockService },
  contactService: { provide: ContactService, useClass: ContactMockService },
  followService: { provide: FollowService, useClass: FollowMockService },
  photoService: { provide: PhotoService, useClass: PhotoMockService },
  analytics: {
    id: 'UA-134451760-1'
  },
  adsense: {
    adClient: 'ca-pub-4398400415874126',
    adSlot: 8863530136
  }
};
