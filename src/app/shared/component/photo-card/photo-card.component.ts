import { Component, OnInit, Input } from '@angular/core';
import { Photo, PhotoService } from 'shared/service/photo';

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

  constructor(
    private photoService: PhotoService
  ) { }

  ngOnInit() {
  }

  /**
   * いいね
   */
  public like(): void {
    this.photo.isLike = !this.photo.isLike;

    // TODO 未ログイン処理

    // いいねをする
    const sub = (this.photo.isLike) ? this.photoService.likePhoto(this.photo.cd) : this.photoService.dislikePhoto(this.photo.cd);
    sub.subscribe((ret: boolean) => {
      // いいね件数
      this.photo.likeCount += this.photo.isLike ? 1 : -1;
    });
  }

  /**
   * コメントいいね
   */
  public likeComment(index: number): void {
    this.photo.comments[index].isLike = !this.photo.comments[index].isLike;

    // TODO 未ログイン処理

    // いいねをする
    const sub = (this.photo.comments[index].isLike)
      ? this.photoService.likeComment(this.photo.cd, this.photo.comments[index].cd)
      : this.photoService.dislikeComment(this.photo.cd, this.photo.comments[index].cd);
  }
}
