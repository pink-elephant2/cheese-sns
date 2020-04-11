import { AuthService } from 'shared/service/auth';
import { AccountService } from 'shared/service/account';
import { ActivityService } from 'shared/service/activity';
import { BookmarkService } from 'shared/service/bookmark';
import { ContactService } from 'shared/service/contact';
import { PhotoService } from 'shared/service/photo';
import { FollowService } from 'shared/service/follow';
import { PasswordService } from 'shared/service/password';

export const environment = {
  production: true,
  apiDomain: 'https://api.torochee.com',
  authService: AuthService,
  accountService: AccountService,
  activityService: ActivityService,
  bookmarkService: BookmarkService,
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
