import { AccountService, AccountMockService } from 'shared/service/account';
import { PhotoService, PhotoMockService } from 'shared/service/photo';

export const environment = {
  production: true,
  AccountService: { provide: AccountService, useClass: AccountMockService },
  PhotoService: { provide: PhotoService, useClass: PhotoMockService }
};
