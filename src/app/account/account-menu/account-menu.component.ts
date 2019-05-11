import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'shared/service/auth';
import { Account, AccountService } from 'shared/service/account';
import { ReportForm } from 'shared/component/photo-card/photo-card-menu/report-form';
import { LoadingService } from 'shared/service/loading';
import { NavigateService } from 'shared/service/navigate';

/**
 * アカウント詳細メニュー
 */
@Component({
  selector: 'app-account-menu',
  templateUrl: './account-menu.component.html',
  styleUrls: ['./account-menu.component.scss']
})
export class AccountMenuComponent implements OnInit, OnChanges {

  /** アカウント情報 */
  @Input() account: Account;

  /** 自分か */
  isMe = false;

  /** モーダル */
  private modalInstance: any;
  private modalConfirmReportInstance: any;
  private modalConfirmBlockInstance: any;

  /** 入力フォーム */
  form: FormGroup;

  /** 処理完了 */
  isCompleted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private accountService: AccountService,
    private loadingService: LoadingService,
    private navigateService: NavigateService
  ) {
    this.form = this.formBuilder.group(ReportForm.validators);
  }

  ngOnInit() {
    // モーダル
    this.modalInstance = window['M'].Modal.init(document.getElementById('menu-modal'), {
      endingTop: '30%'
    });
    // 確認モーダル
    this.modalConfirmReportInstance = window['M'].Modal.init(document.getElementById('confirm-report-modal'), {
      endingTop: '15%'
    });
    this.modalConfirmBlockInstance = window['M'].Modal.init(document.getElementById('confirm-block-modal'), {
      endingTop: '30%'
    });
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    if (this.account) {
      // ログイン前に行う予定だった処理を実行する
      if (this.navigateService.getAfterLoginUrl() === ('/' + this.account.loginId)
        && this.navigateService.getAfterLoginCallback() !== undefined
        && this[this.navigateService.getAfterLoginCallback()] !== undefined) {
        this[this.navigateService.getAfterLoginCallback()]();
        this.navigateService.clearAfterLogin();
      }

      // 自分か
      this.isMe = this.account.loginId === this.authService.loginId;
    }
  }

  /**
   * 通報する (確認モーダルを開く)
   */
  public reportConfirm(): void {
    // モーダルを閉じる
    this.modalInstance.close();

    // 確認モーダルを開く
    this.modalConfirmReportInstance.open();
  }

  /**
   * 通報する
   */
  public report(form: ReportForm, isValid: boolean): void {
    if (!isValid) {
      return;
    }
    // アカウント通報API実行
    this.loadingService.setLoading(true);
    this.accountService.report(this.account.loginId, form.reason).subscribe(ret => {
      this.loadingService.setLoading(false);
      this.isCompleted = ret;
    });
    // TODO エラー処理
  }

  /**
   * ブロックする (確認モーダルを開く)
   */
  public blockConfirm(): void {
    // モーダルを閉じる
    this.modalInstance.close();

    // 確認モーダルを開く
    this.modalConfirmBlockInstance.open();
  }

  /**
   * ブロックする
   */
  public block(): void {
    // 未ログイン処理
    if (!this.authService.authenticated) {
      // ログイン後に行う処理を設定
      this.navigateService.setAfterLogin('/' + this.account.loginId, 'block');
      this.router.navigate(['/login']);
      return;
    }

    // アカウントブロックAPI実行
    this.loadingService.setLoading(true);
    this.accountService.block(this.account.loginId).subscribe(ret => {
      this.loadingService.setLoading(false);

      // モーダルを閉じる
      this.modalConfirmBlockInstance.close();
      this.router.navigate(['/account']);
    });
    // TODO エラー処理
  }

}
