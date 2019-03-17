import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginForm } from '../login/login-form';

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
    private router: Router
  ) {
    this.form = this.formBuilder.group(LoginForm.validators);
  }

  ngOnInit() {
    // TODO 未作成のため暫定でログイン画面へ
    this.router.navigate(['/login']);
  }

}
