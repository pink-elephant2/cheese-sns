import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import Compressor from 'compressorjs';

import { CreateForm } from './create-form';
import { AuthService } from 'shared/service/auth';
import { PhotoService, Photo } from 'shared/service/photo';
import { LoadingService } from 'shared/service/loading';

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

  /** プレビュー動画パス */
  blobVideoUrl: SafeResourceUrl;

  /** バリデーション失敗 */
  isInValid: boolean;
  /** APIエラー */
  isError: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private photoService: PhotoService,
    private loadingService: LoadingService,
    private sanitizer: DomSanitizer
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
    this.blobUrl = undefined;
    this.blobVideoUrl = undefined;

    if (files[0].type.indexOf('image/') !== -1) {
      // 画像
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        this.blobUrl = reader.result.toString();
      }, false);
      reader.readAsDataURL(files[0]);
    } else if (files[0].type.indexOf('video/') !== -1) {
      // 動画
      this.blobVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(files[0]));
    } else {
      // TODO エラー処理
      console.error(files[0]);
    }
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

    this.loadingService.setLoading(true);

    // タグ設定
    form.tags = (form.caption.match(/[#＃][Ａ-Ｚａ-ｚA-Za-z一-鿆0-9０-９ぁ-ヶｦ-ﾟー._-]+/gm) || [])
      .map(tag => tag.substring(1));

    if (this.blobUrl) {
      // 画像登録
      this.postImage(form, files);
    } else if (this.blobVideoUrl) {
      // 動画登録
      this.postVideo(form, files);
    }
  }

  /** 画像登録 */
  private postImage(form: CreateForm, files: FileList): void {
    // 画像圧縮
    new Compressor(files[0], {
      quality: 0.8,
      maxWidth: 1200,
      success: (result) => {
        // 写真を投稿する
        this.photoService.postPhoto(this.authService.loginId, form, new File([result], files[0].name, { type: files[0].type })).subscribe((photo: Photo) => {
          this.loadingService.setLoading(false);

          if (photo.cd) {
            // TODO 完了モーダルを出してから
            setTimeout(() => {
              // this.router.navigate(['/photo/' + photo.cd]);
              window.location.href = '/photo/' + photo.cd;
            }, 0);
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
      },
      error(err) {
        this.loadingService.setLoading(false);
        throw err;
      }
    });
  }

  /** 動画登録 */
  private postVideo(form: CreateForm, files: FileList): void {
    // 動画を投稿する
    this.photoService.postVideo(this.authService.loginId, form, files[0]).subscribe((photo: Photo) => {
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
