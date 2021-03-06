import { AuthService, AuthMockService } from 'shared/service/auth';
import { AccountService, AccountMockService } from 'shared/service/account';
import { ActivityService, ActivityMockService } from 'shared/service/activity';
import { BookmarkService, BookmarkMockService } from 'shared/service/bookmark';
import { ContactService, ContactMockService } from 'shared/service/contact';
import { PhotoService, PhotoMockService } from 'shared/service/photo';
import { FollowService, FollowMockService } from 'shared/service/follow';
import { PasswordService, PasswordMockService } from 'shared/service/password';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiDomain: '',
  authService: { provide: AuthService, useClass: AuthMockService },
  accountService: { provide: AccountService, useClass: AccountMockService },
  activityService: { provide: ActivityService, useClass: ActivityMockService },
  bookmarkService: { provide: BookmarkService, useClass: BookmarkMockService },
  contactService: { provide: ContactService, useClass: ContactMockService },
  followService: { provide: FollowService, useClass: FollowMockService },
  photoService: { provide: PhotoService, useClass: PhotoMockService },
  passwordService: { provide: PasswordService, useClass: PasswordMockService },
  analytics: {
    id: ''
  },
  adsense: {}
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
