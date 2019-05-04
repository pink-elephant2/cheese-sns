import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { APP_TITLE } from 'shared/const';
import { AuthService } from 'shared/service/auth';
import { LoadingService } from 'shared/service/loading';
import { AccountService, Account } from 'shared/service/account';

/**
 * アクティビティ画面
 */
@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  constructor(
    private accountService: AccountService,
    private authService: AuthService,
    private loadingService: LoadingService,
    private titleService: Title,
    private router: Router
  ) { }

  ngOnInit() {
    const loginId = this.authService.loginId;

    // アカウント取得
    this.loadingService.setLoading(true);
    this.accountService.getAccount(loginId).subscribe((account: Account) => {
      this.loadingService.setLoading(false);

      // アカウントが存在しない場合
      if (!account) {
        // TODO 404NotFound
        this.router.navigate(['/']);
        return;
      }

      // タイトル設定
      this.setTitle(account.name, loginId);

      // タブ初期化
      const instance = M.Tabs.init(document.querySelectorAll('.tabs'), {});
    });
  }

  /** タイトル設定  */
  private setTitle(name: string, loginId: string): void {
    const title = name + 'さん(@' + loginId + ')のアクティビティ - ' + APP_TITLE;
    this.titleService.setTitle(title);
  }
}
