import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Account, AccountService } from 'shared/service/account';
import { AuthService } from 'shared/service/auth';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit, OnDestroy {

  /** アカウントID */
  account: Account;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private accountService: AccountService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const loginId = this.authService.loginId || params['loginId'];

      // アカウント取得
      this.accountService.getAccount(loginId).subscribe(account => {
        this.account = account;

        // タブ初期化
        const instance = window['M'].Tabs.init(document.querySelectorAll('.tabs'), {});
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
