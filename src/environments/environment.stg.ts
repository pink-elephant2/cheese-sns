import { AuthService } from 'shared/service/auth';
import { AccountService } from 'shared/service/account';
import { ActivityService } from 'shared/service/activity';
import { ContactService } from 'shared/service/contact';
import { PhotoService } from 'shared/service/photo';
import { FollowService } from 'shared/service/follow';
import { PasswordService } from 'shared/service/password';

export const environment = {
  production: false,
  apiDomain: '',
  authService: AuthService,
  accountService: AccountService,
  activityService: ActivityService,
  contactService: ContactService,
  followService: FollowService,
  photoService: PhotoService,
  passwordService: PasswordService,
  analytics: {
    id: ''
  },
  adsense: {}
};
