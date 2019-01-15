import { AccountService, AccountMockService } from 'shared/service/account';

export const environment = {
  production: true,
  AccountService: { provide: AccountService, useClass: AccountMockService },
};
