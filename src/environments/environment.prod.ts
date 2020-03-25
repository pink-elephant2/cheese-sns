import { AuthService } from 'shared/service/auth';
import { AccountService } from 'shared/service/account';
import { ActivityService } from 'shared/service/activity';
import { ContactService } from 'shared/service/contact';
import { PhotoService } from 'shared/service/photo';
import { FollowService } from 'shared/service/follow';
import { PasswordService } from 'shared/service/password';

export const environment = {
  production: true,
  apiDomain: 'http://ec2-18-176-84-54.ap-northeast-1.compute.amazonaws.com',
  authService: AuthService,
  accountService: AccountService,
  activityService: ActivityService,
  contactService: ContactService,
  followService: FollowService,
  photoService: PhotoService,
  passwordService: PasswordService,
  analytics: {
    id: 'UA-134451760-1'
  },
  adsense: {
    adClient: 'ca-pub-4398400415874126',
    adSlot: 8863530136
  }
};
