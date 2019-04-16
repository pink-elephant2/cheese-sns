import { AuthService, AuthMockService } from 'shared/service/auth';
import { AccountService } from 'shared/service/account';
import { ActivityService } from 'shared/service/activity';
import { ContactService } from 'shared/service/contact';
import { PhotoService } from 'shared/service/photo';
import { FollowService } from 'shared/service/follow';

export const environment = {
  production: false,
  authService: { provide: AuthService, useClass: AuthMockService },
  accountService: AccountService,
  activityService: ActivityService,
  contactService: ContactService,
  followService: FollowService,
  photoService: PhotoService,
  analytics: {
    id: ''
  },
  adsense: {}
};
