import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import { CreateForm } from './create-form';
import { PhotoService, Photo } from 'shared/service/photo';
import { LoadingService } from 'shared/service/loading';
import { Router } from '@angular/router';

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
    private formBuilder: FormBuilder,
    private router: Router,
    private photoService: PhotoService,
    private loadingService: LoadingService,
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
    this.isInValid = false;
    this.isError = false;

    // 写真を投稿する
    this.loadingService.setLoading(true);
    this.photoService.postPhoto(form, files[0]).subscribe((photo: Photo) => {
      this.loadingService.setLoading(false);

      if (photo.cd) {
        // TODO 完了モーダルを出してから
        this.router.navigate(['/photo/' + photo.cd]);
      }
    }, (error: HttpErrorResponse) => {
      this.loadingService.setLoading(false);
      console.error(error);

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
