import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { ContactForm } from './contact-form';

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

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group(ContactForm.validators);
  }

  ngOnInit() {
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

  }
}
