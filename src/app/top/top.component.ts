import { Component, OnInit } from '@angular/core';
import { Photo, PhotoService } from 'shared/service/photo';
import { Pageable } from 'shared/model';

/**
 * TOP画面
 */
@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {

  /** 写真リスト */
  photoList: Photo[];

  /** ページ情報 */
  pageable = {
    page: 0,
    size: 6
  } as Pageable;

  constructor(private photoService: PhotoService) { }

  ngOnInit() {
    // 写真を取得
    this.photoService.getPhotoList(this.pageable).subscribe(photoList => {
      this.photoList = photoList;
    });
  }

}
