import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginForm } from './login-form';
import { AuthService } from 'shared/service/auth';
import { LoadingService } from 'shared/service/loading';
import { NavigateService } from 'shared/service/navigate';

/**
 * ログイン画面
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  /** 入力フォーム */
  form: FormGroup;

  /** ログイン失敗 */
  isInValid: boolean;
  /** APIエラー */
  isError: boolean;

  /** ログイン後の画面 */
  nextUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private loadingService: LoadingService,
    private navigateService: NavigateService
  ) {
    this.form = this.formBuilder.group(LoginForm.validators);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.nextUrl === undefined) {
      // ログイン成功せず別画面に遷移する場合、アクション予約を解除する
      this.navigateService.clearAfterLogin();
    }
  }

  /**
   * 登録ボタン
   * @param form 入力フォーム
   * @param isValid 有効か
   */
  onSubmit(form: LoginForm, isValid: boolean) {
    if (!isValid) {
      return;
    }
    this.isInValid = false;
    this.isError = false;

    // ログイン
    this.loadingService.setLoading(true);
    this.authService.login(this.form.value).subscribe((ret: boolean) => {
      this.loadingService.setLoading(false);

      if (ret) {
        this.nextUrl = '/account';
        this.navigateService.isLoggedIn = true;
        if (this.navigateService.getAfterLoginUrl() !== undefined) {
          this.nextUrl = this.navigateService.getAfterLoginUrl();
        }

        // 次ページへ
        this.router.navigate([this.nextUrl]);
      } else {
        this.isInValid = true;
      }
    }, (error: Response) => {
      this.loadingService.setLoading(false);

      switch (error.status) {
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
