import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

import { Account, AccountService } from 'shared/service/account';
import { AuthService } from 'shared/service/auth';
import { FollowService } from 'shared/service/follow';
import { LoadingService } from 'shared/service/loading';
import { NavigateService } from 'shared/service/navigate';
import { APP_DOMAIN, APP_TITLE, ACCOUNT_DEFAULT_IMG_PATH } from 'shared/const';
import { catchError } from 'rxjs/operators';

/**
 * アカウント画面
 */
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit, OnDestroy {

  /** アカウント */
  account: Account;

  /** 自分のアカウントを表示しているか */
  isMe = false;

  /** 投稿数 */
  postCount = 0;

  /** フォロー数 */
  followingCount = 0;

  /** フォローワー数 */
  followersCount = 0;

  /** アカウントが存在しない */
  isNotFound = false;

  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title,
    private meta: Meta,
    private accountService: AccountService,
    private followService: FollowService,
    private authService: AuthService,
    private loadingService: LoadingService,
    private navigateService: NavigateService
  ) { }

  ngOnInit() {
    // モーダル
    window['$']('.modal').modal();

    this.sub = this.route.params.subscribe((params: { loginId: string }) => {
      const loginId = params.loginId || this.authService.loginId;

      // アカウント取得
      this.account = undefined;
      this.loadingService.setLoading(true);
      this.accountService.getAccount(loginId).pipe(catchError((error: Response) => {
        this.loadingService.setLoading(false);

        // アカウントが存在しない場合
        if (error.status === 404) {
          this.meta.addTag({ name: 'robots', content: 'noindex' });
          this.isNotFound = true;
        }
        throw error;
      })).subscribe((account: Account) => {
        this.loadingService.setLoading(false);

        // アカウントが存在しない場合
        if (!account) {
          this.isNotFound = true;
          return;
        }

        this.account = account;
        this.isMe = this.account.loginId === this.authService.loginId;

        // タイトル設定
        const title = this.account.name + 'さん(@' + this.account.loginId + ')';
        this.titleService.setTitle(title + ' - ' + APP_TITLE);

        // メタ設定
        this.meta.updateTag({ name: 'description', content: this.account.description || '' });
        this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
        this.meta.updateTag({ property: 'og:title', content: title });
        this.meta.updateTag({ property: 'og:type', content: 'article' });
        this.meta.updateTag({ property: 'og:url', content: APP_DOMAIN + '/' + this.account.loginId });
        this.meta.updateTag({ property: 'og:image', content: this.account.imgUrl || APP_DOMAIN + ACCOUNT_DEFAULT_IMG_PATH });
        this.meta.updateTag({ property: 'og:description', content: this.account.description || '' });

        // タブ初期化
        const instance = window['M'].Tabs.init(document.querySelectorAll('.tabs'), {});

        // ログイン前に行う予定だった処理を実行する
        if (this.navigateService.getAfterLoginUrl() === ('/' + this.account.loginId)
          && this.navigateService.getAfterLoginCallback() !== undefined
          && this[this.navigateService.getAfterLoginCallback()] !== undefined) {
          this[this.navigateService.getAfterLoginCallback()]();
          this.navigateService.clearAfterLogin();
        }
      });
    });
  }

  ngOnDestroy() {
    this.meta.removeTag('name=robots');
    this.sub.unsubscribe();
  }

  /**
   * フォローする
   */
  follow(): void {
    // 未ログイン処理
    if (!this.authService.authenticated) {
      // ログイン後に行う処理を設定
      this.navigateService.setAfterLogin('/' + this.account.loginId, 'follow');
      this.router.navigate(['/login']);
      return;
    }

    // フォローする
    this.followService.follow(this.authService.loginId, this.account.loginId).subscribe((ret: boolean) => {
      if (ret) {
        this.account.isFollow = true;
      }
    });
  }

  /**
   * フォローを解除する
   */
  unfollow(): void {
    // 未ログイン処理
    if (!this.authService.authenticated) {
      // ログイン後に行う処理を設定
      this.navigateService.setAfterLogin('/' + this.account.loginId, 'unfollow');
      this.router.navigate(['/login']);
      return;
    }

    // フォローを解除する
    this.followService.unfollow(this.authService.loginId, this.account.loginId).subscribe((ret: boolean) => {
      if (ret) {
        this.account.isFollow = false;

        const instance = window['M'].Modal.getInstance(document.getElementById('unfollow-modal'));
        instance.close();
      }
    });
  }
}
