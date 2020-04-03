import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

import { APP_TITLE } from '../../const';
import { AuthService } from '../../service/auth';
import { AccountService, Account } from '../../service/account';

/**
 * ヘッダー
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  /** タイトル */
  title = APP_TITLE;

  /** ログイン状態 */
  authenticated = false;

  /** アカウント */
  account: Account;

  /** リンクを表示するか */
  isLink = true;

  /** オートコンプリート */
  autocompleteInstance: any[];

  /** 検索結果サジェスト */
  searchSuggest = {
    "Apple": null,
    "Microsoft": null,
    "Google": 'https://placehold.it/250x250'
  }; // TODO 後で消す

  /** setTimeout 入力待ち */
  eventId: NodeJS.Timeout;

  /** 検索フォーム入力値 */
  searchInputValue: string;

  constructor(
    private router: Router,
    private authService: AuthService,
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((params: any) => {
      if (params.url === '/maintenance') {
        this.isLink = false;
        return;
      }
      this.isLink = true;

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
    });
  }

  ngAfterViewInit(): void {
    // サイドメニュー初期化
    window['$']('.sidenav').sidenav();

    // ドロップダウン初期化
    window['M'].Dropdown.init(document.querySelectorAll('.dropdown-trigger'), {
      constrainWidth: false
    });

    // オートコンプリート初期化
    this.autocompleteInstance = window['M'].Autocomplete.init(document.querySelectorAll('input.autocomplete'), {
      onAutocomplete: (value: string) => {
        console.log(value);

        // 検索文字列を保存
        this.searchInputValue = value;
      }
    });
  }

  /**
   * 検索ボックス入力イベント
   */
  onChangeSearch($event: Event): void {
    const value = ($event.target as HTMLInputElement).value;
    if (!value || value === this.searchInputValue) {
      return;
    }

    if (this.eventId) {
      clearTimeout(this.eventId);
    }
    this.eventId = setTimeout(() => {

      console.group();
      console.log(this.eventId);
      console.log($event);
      console.log(typeof $event);
      console.log(value);
      console.groupEnd();

      // 検索文字列を保存
      this.searchInputValue = value;

      // オートコンプリート更新
      this.searchSuggest[value] = null;
      this.autocompleteInstance.forEach(i => i.updateData(this.searchSuggest));
    }, 300);

  }
}
