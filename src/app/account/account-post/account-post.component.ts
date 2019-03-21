import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PhotoService, Photo } from 'shared/service/photo';

@Component({
  selector: 'app-account-post',
  templateUrl: './account-post.component.html',
  styleUrls: ['./account-post.component.scss']
})
export class AccountPostComponent implements OnInit {

  @Input() loginId: string;

  /** 投稿数 */
  @Output() postCount: EventEmitter<number> = new EventEmitter<number>();

  photoList: Photo[];

  constructor(private photoService: PhotoService) { }

  ngOnInit() {
    this.photoService.getPhotoList(this.loginId).subscribe(photoPage => {
      this.photoList = photoPage.content;

      // 親に投稿数を渡す
      setTimeout(() => {
        this.postCount.emit(this.photoList.length);
      });
    });
  }

}
