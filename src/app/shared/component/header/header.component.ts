import { Component, OnInit } from '@angular/core';

import { APP_TITLE } from 'shared/const';
import { AuthService } from 'shared/service/auth';
import { AccountService, Account } from 'shared/service/account';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  /** タイトル */
  title = APP_TITLE;

  /** ログイン状態 */
  authenticated = false;

  /** アカウント */
  account: Account;

  /** リンクを表示するか */
  isLink = true;

  constructor(
    private authService: AuthService,
    private accountService: AccountService
  ) { }

  ngOnInit() {
    if (location.pathname === '/maintenance') {
      this.isLink = false;
      return;
    }
    // ログイン検知
    this.authService.isAuthenticated.subscribe(ret => {
      this.authenticated = Boolean(ret);

      // ログイン後
      if (this.authenticated) {
        // アカウント取得
        this.accountService.getAccount(this.authService.loginId).subscribe(account => {
          this.account = account;
        });
      } else {
        this.account = undefined;
      }
    });

    // ドロップダウン初期化
    const option = {
      constrainWidth: false
    };
    window['M'].Dropdown.init(document.querySelectorAll('.dropdown-trigger'), option);
  }

}
