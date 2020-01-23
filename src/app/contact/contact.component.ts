import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { ContactForm } from './contact-form';
import { ContactService } from 'shared/service/contact';
import { LoadingService } from 'shared/service/loading';
import { GaService } from 'shared/service/ga';

/**
 * お問合せ画面
 */
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  /** 入力フォーム */
  form: FormGroup;

  /** バリデーション失敗 */
  isInValid: boolean;
  /** APIエラー */
  isError: boolean;
  /** 送信完了 */
  isCompleted: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService,
    private loadingService: LoadingService,
    private gaService: GaService
  ) {
    this.form = this.formBuilder.group(ContactForm.validators);
  }

  ngOnInit() {
    // 文字数カウント
    window['$']('input, textarea').characterCounter();
  }

  /**
   * 登録ボタン
   * @param form 入力フォーム
   * @param isValid 有効か
   */
  onSubmit(form: ContactForm, isValid: boolean) {
    if (!isValid) {
      return;
    }
    this.isInValid = false;
    this.isError = false;

    // お問合せ送信
    this.loadingService.setLoading(true);
    this.contactService.sendContact(this.form.value).subscribe((ret: boolean) => {
      this.loadingService.setLoading(false);

      if (ret) {
        // tracking
        this.gaService.sendEvent('contact', 'contact', 'click', form.name);

        // 送信完了
        this.isCompleted = true;
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
