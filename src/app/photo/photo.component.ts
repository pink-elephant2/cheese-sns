import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { Photo, PhotoService } from 'shared/service/photo';
import { LoadingService } from 'shared/service/loading';
import { APP_TITLE } from 'shared/const';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit, OnDestroy {

  photo: Photo;

  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
    private photoService: PhotoService,
    private loadingService: LoadingService
  ) { }

  ngOnInit() {

    this.sub = this.route.params.subscribe((params: { photoId: string }) => {
      const photoId = params.photoId;

      // 写真を取得
      this.loadingService.setLoading(true);
      this.photoService.getPhoto(photoId).subscribe(photo => {
        this.loadingService.setLoading(false);

        this.photo = photo;

        // タイトル設定
        const caption = this.photo.caption ? '「' + this.photo.caption + '」' : '';
        const title = this.photo.account.name + 'さん(@' + this.photo.account.loginId + ')'
          + caption + ' - ' + APP_TITLE;
        this.titleService.setTitle(title);
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
