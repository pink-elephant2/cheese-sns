import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { PhotoService, Photo } from 'shared/service/photo';
import { Router } from '@angular/router';
import { Page, Pageable } from 'shared/model';

@Component({
  selector: 'app-account-post',
  templateUrl: './account-post.component.html',
  styleUrls: ['./account-post.component.scss']
})
export class AccountPostComponent implements OnChanges {

  @Input() loginId: string;

  /** 投稿数 */
  @Output() postCount: EventEmitter<number> = new EventEmitter<number>();

  photoData: Page<Photo>;

  constructor(
    private router: Router,
    private photoService: PhotoService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    // ログインIDを渡されない場合(ブロックなど)
    if (!this.loginId) {
      this.postCount.emit(0);
      return;
    }
    // 投稿を取得する
    this.getPhotoList();
  }

  /**
   * 投稿を取得する
   */
  getPhotoList(page?: number) {
    const pageable = {
      page: page || 0
    } as Pageable;

    // 投稿を取得する
    this.photoService.getPhotoList(this.loginId, pageable).subscribe(photoData => {
      this.photoData = photoData;

      // 親に投稿数を渡す
      setTimeout(() => {
        this.postCount.emit(this.photoData.totalElements);
      });

      window.scrollTo(0, 0);
    }, () => {
      this.router.navigate(['logout']);
    });
  }
}
