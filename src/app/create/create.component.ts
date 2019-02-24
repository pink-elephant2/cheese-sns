import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CreateForm } from './create-form';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  /** 入力フォーム */
  form: FormGroup;

  /** プレビュー画像パス */
  blobUrl: string;

  /** バリデーション失敗 */
  isInValid: boolean;
  /** APIエラー */
  isError: boolean;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group(CreateForm.validators);
  }

  ngOnInit() {
    // テキストエリア文字数カウント
    window['$']('textarea').characterCounter();
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
   * 登録ボタン
   * @param form 入力フォーム
   * @param isValid 有効か
   */
  onSubmit(form: CreateForm, files: FileList, isValid: boolean) {
    if (!isValid) {
      return;
    }
    // ファイル送信
    const data = new FormData();
    data.append('upfile', files[0], form.upfile);
  }
}
