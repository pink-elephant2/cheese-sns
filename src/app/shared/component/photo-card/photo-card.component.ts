import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Photo, PhotoService, Comment } from 'shared/service/photo';
import { CommentForm } from './comment-form';
import { LoadingService } from 'shared/service/loading';

/**
 * 写真カード
 */
@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss']
})
export class PhotoCardComponent implements OnInit {

  /** 写真情報 */
  @Input() photo: Photo;

  /** コメント入力フォームを表示するか */
  @Input() hasInputComment = false;

  /** 入力フォーム */
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private photoService: PhotoService,
    private loadingService: LoadingService
  ) {
    this.form = this.formBuilder.group(CommentForm.validators);
  }

  ngOnInit() {
  }

  /**
   * いいね
   */
  public like(): void {
    // TODO 未ログイン処理

    // いいねをする
    const sub = (!this.photo.isLike) ? this.photoService.likePhoto(this.photo.cd) : this.photoService.dislikePhoto(this.photo.cd);
    sub.subscribe((ret: boolean) => {
      this.photo.isLike = !this.photo.isLike;

      // いいね件数
      this.photo.likeCount += this.photo.isLike ? 1 : -1;
    });
  }

  /**
   * コメントにフォーカスする
   */
  public focusComment(): void {
    document.getElementById('comment').focus();
  }

  /**
   * コメントする
   */
  public onSubmit(form: CommentForm, isValid: boolean): void {
    if (!isValid) {
      return;
    }

    // TODO 未ログイン処理

    // コメントする
    this.loadingService.setLoading(true);
    this.photoService.comment(this.photo.cd, form.comment).subscribe((comment: Comment) => {
      this.loadingService.setLoading(false);

      // コメントに1行追加
      this.photo.comments.push(comment);
    });
  }

  /**
   * コメントいいね
   */
  public likeComment(index: number): void {
    // TODO 未ログイン処理

    // いいねをする
    const sub = (!this.photo.comments[index].isLike)
      ? this.photoService.likeComment(this.photo.cd, this.photo.comments[index].cd)
      : this.photoService.dislikeComment(this.photo.cd, this.photo.comments[index].cd);

    sub.subscribe((ret: boolean) => {
      this.photo.comments[index].isLike = !this.photo.comments[index].isLike;
    });
  }
}
