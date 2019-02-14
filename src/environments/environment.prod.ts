import { AuthService, AuthMockService } from 'shared/service/auth';
import { AccountService, AccountMockService } from 'shared/service/account';
import { ContactService, ContactMockService } from 'shared/service/contact';
import { PhotoService, PhotoMockService } from 'shared/service/photo';
import { FollowService, FollowMockService } from 'shared/service/follow';

export const environment = {
  production: true,
  authService: { provide: AuthService, useClass: AuthMockService },
  AccountService: { provide: AccountService, useClass: AccountMockService },
  ContactService: { provide: ContactService, useClass: ContactMockService },
  FollowService: { provide: FollowService, useClass: FollowMockService },
  PhotoService: { provide: PhotoService, useClass: PhotoMockService },
  analytics: {
    id: 'UA-134451760-1'
  }
};
