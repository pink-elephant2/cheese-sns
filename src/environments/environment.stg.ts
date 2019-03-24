import { AuthService, AuthMockService } from 'shared/service/auth';
import { AccountService, AccountMockService } from 'shared/service/account';
import { ActivityService, ActivityMockService } from 'shared/service/activity';
import { ContactService, ContactMockService } from 'shared/service/contact';
import { PhotoService, PhotoMockService } from 'shared/service/photo';
import { FollowService, FollowMockService } from 'shared/service/follow';

export const environment = {
  production: false,
  authService: { provide: AuthService, useClass: AuthMockService },
  AccountService: AccountService,
  ActivityService: { provide: ActivityService, useClass: ActivityMockService },
  ContactService: ContactService,
  FollowService: FollowService,
  PhotoService: PhotoService,
  analytics: {
    id: ''
  },
  adsense: {}
};
