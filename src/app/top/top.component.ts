import { Component, OnInit } from '@angular/core';
import { Photo, PhotoService } from 'shared/service/photo';

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

  constructor(private photoService: PhotoService) { }

  ngOnInit() {
    // 写真を取得
    this.photoService.getPhotoList().subscribe(photoList => {
      this.photoList = photoList;
    });
  }

}
