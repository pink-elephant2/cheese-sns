import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

import { Account, AccountService } from 'shared/service/account';
import { AuthService } from 'shared/service/auth';
import { LoadingService } from 'shared/service/loading';
import { APP_TITLE } from 'shared/const';

/**
 * アカウント画面
 */
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit, OnDestroy {

  /** アカウントID */
  account: Account;

  /** 自分のアカウントを表示しているか */
  isMe = false;

  /** 投稿数 */
  postCount = 0;

  /** フォロー数 */
  followingCount = 0;

  /** フォローワー数 */
  followersCount = 0;

  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title,
    private accountService: AccountService,
    private authService: AuthService,
    private loadingService: LoadingService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const loginId = params['loginId'] || this.authService.loginId;

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

        this.account = account;
        this.isMe = this.account.loginId === this.authService.loginId;

        // タイトル設定
        const title = this.account.name + 'さん(@' + this.account.loginId + ') - ' + APP_TITLE;
        this.titleService.setTitle(title);

        // タブ初期化
        const instance = window['M'].Tabs.init(document.querySelectorAll('.tabs'), {});
      });
    }, (error: Response) => {

    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
