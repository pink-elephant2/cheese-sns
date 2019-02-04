import { AccountService, AccountMockService } from 'shared/service/account';
import { PhotoService, PhotoMockService } from 'shared/service/photo';
import { FollowService, FollowMockService } from 'shared/service/follow';

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  AccountService: { provide: AccountService, useClass: AccountMockService },
  FollowService: { provide: FollowService, useClass: FollowMockService },
  PhotoService: { provide: PhotoService, useClass: PhotoMockService }
};
