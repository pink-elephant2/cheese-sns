import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { Photo, PhotoService } from 'shared/service/photo';
import { AuthService } from 'shared/service/auth';
import { ReportForm } from './report-form';
import { LoadingService } from 'shared/service/loading';

/**
 * 写真カード
 * メニューモーダル
 */
@Component({
  selector: 'app-photo-card-menu',
  templateUrl: './photo-card-menu.component.html',
  styleUrls: ['./photo-card-menu.component.scss']
})
export class PhotoCardMenuComponent implements OnInit, OnChanges {

  /** 写真情報 */
  @Input() photo: Photo;

  /** 自分が投稿した写真か */
  isMine = false;

  /** モーダル */
  private modalInstance: any;
  private modalConfirmReportInstance: any;
  private modalConfirmRemoveInstance: any;

  /** 入力フォーム */
  form: FormGroup;

  /** 処理完了 */
  isCompleted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private photoService: PhotoService,
    private loadingService: LoadingService
  ) {
    this.form = this.formBuilder.group(ReportForm.validators);
  }

  ngOnInit() {
    // モーダル
    this.modalInstance = window['M'].Modal.init(document.getElementById('menu-modal'), {
      endingTop: '30%'
    });
    // 確認モーダル
    this.modalConfirmReportInstance = window['M'].Modal.init(document.getElementById('confirm-report-modal'), {
      endingTop: '15%'
    });
    this.modalConfirmRemoveInstance = window['M'].Modal.init(document.getElementById('confirm-remove-modal'), {
      endingTop: '30%'
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.photo) {
      // 自分が投稿した写真か
      this.isMine = this.authService.loginId === this.photo.account.loginId;
    }
  }

  /**
   * 通報する (確認モーダルを開く)
   */
  public reportConfirm(): void {
    // モーダルを閉じる
    this.modalInstance.close();

    // 確認モーダルを開く
    this.modalConfirmReportInstance.open();
  }

  /**
   * 通報する
   */
  public report(form: ReportForm, isValid: boolean): void {
    if (!isValid) {
      return;
    }
    // 通報API実行
    this.loadingService.setLoading(true);
    this.photoService.report(this.photo.cd, form.reason).subscribe(ret => {
      this.loadingService.setLoading(false);
      this.isCompleted = ret;
    });
    // TODO エラー処理
  }

  /**
   * 削除する (確認モーダルを開く)
   */
  public removeConfirm(): void {
    // モーダルを閉じる
    this.modalInstance.close();

    // 確認モーダルを開く
    this.modalConfirmRemoveInstance.open();
  }

  /**
   * 削除する
   */
  public remove(): void {
    // 削除API実行
    this.loadingService.setLoading(true);
    this.photoService.remove(this.authService.loginId, this.photo.cd).subscribe(ret => {
      this.loadingService.setLoading(false);

      // モーダルを閉じる
      this.modalConfirmRemoveInstance.close();
      this.router.navigate(['/account']);
    });
    // TODO エラー処理
  }
}
