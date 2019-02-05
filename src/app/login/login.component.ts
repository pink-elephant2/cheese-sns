import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginForm } from './login-form';
import { AuthService } from 'shared/service/auth';
import { LoadingService } from 'shared/service/loading';

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

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private loadingService: LoadingService
  ) {
    this.form = this.formBuilder.group(LoginForm.validators);
  }

  ngOnInit() {
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

      // TOP画面へ
      this.router.navigate(['/']);
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
