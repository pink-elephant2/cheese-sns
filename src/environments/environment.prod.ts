import { AuthService } from 'shared/service/auth';
import { AccountService, AccountMockService } from 'shared/service/account';
import { PhotoService, PhotoMockService } from 'shared/service/photo';
import { FollowService, FollowMockService } from 'shared/service/follow';

export const environment = {
  production: true,
  authService: AuthService,
  AccountService: { provide: AccountService, useClass: AccountMockService },
  FollowService: { provide: FollowService, useClass: FollowMockService },
  PhotoService: { provide: PhotoService, useClass: PhotoMockService }
};
