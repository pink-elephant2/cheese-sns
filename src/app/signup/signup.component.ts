import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupForm } from './signup-form';
import { AccountService } from 'shared/service/account';
import { LoadingService } from 'shared/service/loading';
import { AuthService } from 'shared/service/auth';
import { GaService } from 'shared/service/ga';

/**
 * アカウント作成画面
 */
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  /** 入力フォーム */
  form: FormGroup;

  /** APIバリデーション失敗 */
  isInValid: boolean;
  /** APIエラー */
  isError: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private accountService: AccountService,
    private authService: AuthService,
    private loadingService: LoadingService,
    private gaService: GaService
  ) {
    this.form = this.formBuilder.group(SignupForm.validators);
  }

  ngOnInit() {
  }

  /**
   * 登録ボタン
   * @param form 入力フォーム
   * @param isValid 有効か
   */
  onSubmit(form: SignupForm, isValid: boolean) {
    if (!isValid) {
      return;
    }
    this.isInValid = false;
    this.isError = false;

    // アカウント作成
    this.loadingService.setLoading(true);
    this.accountService.createAccount(this.form.value).subscribe((isCreated: boolean) => {
      this.loadingService.setLoading(false);

      // TODO ようこそページ
      // TODO プロフィール設定促進

      if (isCreated) {
        // ログイン認証
        this.authService.login(this.form.value).subscribe((isLogin: boolean) => {
          // tracking
          this.gaService.sendEvent('signup', 'signup', 'click', form.loginId);

          // 次ページへ
          this.router.navigate(['/account']);
          return;
        });
      } else {
        this.isInValid = true;
      }
    }, (error: Response) => {
      this.loadingService.setLoading(false);

      switch (error.status) {
        case 400:
        case 403:
          this.isInValid = true;
          break;
        case 500:
        default:
          this.isError = true;
          break;
      }
    });
  }

}
