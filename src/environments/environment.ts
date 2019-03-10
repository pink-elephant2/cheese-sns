import { AuthService, AuthMockService } from 'shared/service/auth';
import { AccountService, AccountMockService } from 'shared/service/account';
import { ActivityService, ActivityMockService } from 'shared/service/activity';
import { ContactService, ContactMockService } from 'shared/service/contact';
import { PhotoService, PhotoMockService } from 'shared/service/photo';
import { FollowService, FollowMockService } from 'shared/service/follow';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  authService: { provide: AuthService, useClass: AuthMockService },
  AccountService: { provide: AccountService, useClass: AccountMockService },
  ActivityService: { provide: ActivityService, useClass: ActivityMockService },
  ContactService: { provide: ContactService, useClass: ContactMockService },
  FollowService: { provide: FollowService, useClass: FollowMockService },
  PhotoService: { provide: PhotoService, useClass: PhotoMockService },
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
