import { Component, OnInit } from '@angular/core';
import { Photo, PhotoService } from 'shared/service/photo';
import { Pageable } from 'shared/model';
import { LoadingService } from 'shared/service/loading';

/**
 * TOP画面
 */
@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {

  height: number = window.innerHeight - (56 + 32); // ヘッダー+気持ち減らす
  itemSize: 500;

  /** 写真リスト */
  photoList: Photo[] = [];

  /** ページ情報 */
  pageable = {
    page: 0,
    size: 9
  } as Pageable;

  constructor(
    private photoService: PhotoService,
    private loadingService: LoadingService
  ) { }

  ngOnInit() {
    this.getPhotoList();
  }

  getPhotoList() {
    // 写真を取得
    this.loadingService.setLoading(true);
    this.photoService.getPhotoList(null, this.pageable).subscribe(photoPage => {
      this.loadingService.setLoading(false);

      this.photoList = this.photoList.concat(photoPage.content);
    }, () => {
      this.loadingService.setLoading(false);
    });
  }

  /** 次のページを取得 */
  next() {
    this.pageable.page++;
    this.getPhotoList();
  }
}
