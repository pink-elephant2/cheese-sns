import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AccountService, Account } from 'shared/service/account';
import { LoadingService } from 'shared/service/loading';
import { ProfileForm } from './profile-form';

/**
 * プロフィール編集画面
 */
@Component({
  selector: 'app-setting-profile',
  templateUrl: './setting-profile.component.html',
  styleUrls: ['./setting-profile.component.scss']
})
export class SettingProfileComponent implements OnInit {

  /** プレビュー画像パス */
  blobUrl: string;

  /** 入力フォーム */
  form: FormGroup;

  /** ログイン失敗 */
  isInValid: boolean;
  /** APIエラー */
  isError: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private loadingService: LoadingService
  ) {
    this.form = this.formBuilder.group(ProfileForm.validators);
  }

  ngOnInit() {
    // テキストボックス事前入力
    window['M'].updateTextFields();
    // 文字数カウント
    window['$']('input, textarea').characterCounter();

    // アカウント取得
    this.loadingService.setLoading(true);
    this.accountService.getAccount().subscribe((account: Account) => {
      this.loadingService.setLoading(false);

      Object.entries(account).forEach(a => {
        if (this.form.contains(a[0])) {
          this.form.controls[a[0]].setValue(a[1]);
        }
      });
    });
  }

  onchange(files: FileList): void {
    if (files.length <= 0) {
      return;
    }
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      this.blobUrl = reader.result.toString();
    }, false);
    reader.readAsDataURL(files[0]);
  }

  /**
   * 保存ボタン
   * @param form 入力フォーム
   * @param isValid 有効か
   */
  onSubmit(form: ProfileForm, isValid: boolean) {
    if (!isValid) {
      return;
    }
    this.isInValid = false;
    this.isError = false;

    // アカウント更新
    this.loadingService.setLoading(true);
    this.accountService.putProfile(form).subscribe(ret => {
      this.loadingService.setLoading(false);
      if (ret) {
        window['M'].toast({ html: 'プロフィールを保存しました。' });
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
