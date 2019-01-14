import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Account, AccountService } from 'shared/service/account';

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
    private service: AccountService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const loginId = params['loginId'];

      // アカウント取得
      this.service.getAccount(loginId).subscribe(account => {
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
