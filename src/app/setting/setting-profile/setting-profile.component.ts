import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import Compressor from 'compressorjs';

import { AuthService } from 'shared/service/auth';
import { AccountService, Account } from 'shared/service/account';
import { LoadingService } from 'shared/service/loading';
import { ProfileForm } from './profile-form';
import { ImageForm } from './image-form';

/**
 * プロフィール編集画面
 */
@Component({
  selector: 'app-setting-profile',
  templateUrl: './setting-profile.component.html',
  styleUrls: ['./setting-profile.component.scss']
})
export class SettingProfileComponent implements OnInit {

  /** アカウント情報 */
  account: Account;

  /** プレビュー画像パス */
  blobUrl: string;

  /** 入力フォーム */
  form: FormGroup;
  imageForm: FormGroup;

  /** ログイン失敗 */
  isInValid: boolean;
  /** APIエラー */
  isError: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private accountService: AccountService,
    private loadingService: LoadingService
  ) {
    this.form = this.formBuilder.group(ProfileForm.validators);
    this.imageForm = this.formBuilder.group(ImageForm.validators);
  }

  ngOnInit() {
    // テキストボックス事前入力
    window['M'].updateTextFields();
    // 文字数カウント
    window['$']('#profileForm').find('input, textarea').characterCounter();

    // アカウント取得
    this.loadingService.setLoading(true);
    this.accountService.getAccount(this.authService.loginId).subscribe((account: Account) => {
      this.loadingService.setLoading(false);

      this.account = account;

      Object.entries(account).forEach(a => {
        if (this.form.contains(a[0])) {
          this.form.controls[a[0]].setValue(a[1]);
        }
      });
    });
  }

  /**
   * 画像プレビュー
   */
  onchange(files: FileList): void {
    if (files.length <= 0) {
      return;
    }
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      this.blobUrl = reader.result.toString();

      // 画像圧縮
      new Compressor(files[0], {
        quality: 0.8,
        maxWidth: 250,
        success: (result) => {
          // 画像更新
          this.loadingService.setLoading(true);
          this.accountService.putImage(this.account.loginId, this.imageForm.value, new File([result], files[0].name, { type: files[0].type })).subscribe(ret => {
            this.loadingService.setLoading(false);
            if (ret) {
              window['M'].toast({ html: '画像を更新しました。' });
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
        },
        error(err) {
          this.loadingService.setLoading(false);
          throw err;
        }
      });
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
    this.accountService.putProfile(this.account.loginId, form).subscribe(ret => {
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
