import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { catchError } from 'rxjs/operators';

import { Photo, PhotoService } from 'shared/service/photo';
import { LoadingService } from 'shared/service/loading';
import { APP_DOMAIN, APP_TITLE } from 'shared/const';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit, OnDestroy {

  photo: Photo;

  private sub: any;

  /** 写真が存在しない */
  isNotFound = false;

  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
    private meta: Meta,
    private photoService: PhotoService,
    private loadingService: LoadingService
  ) { }

  ngOnInit() {

    this.sub = this.route.params.subscribe((params: { photoId: string }) => {
      const photoId = params.photoId;

      // 写真を取得
      this.loadingService.setLoading(true);
      this.photoService.getPhoto(photoId).pipe(catchError((error: Response) => {
        this.loadingService.setLoading(false);

        // 写真が存在しない場合
        if (error.status === 404) {
          this.meta.addTag({ name: 'robots', content: 'noindex' });
          this.isNotFound = true;
        }
        throw error;
      })).subscribe(photo => {

        this.loadingService.setLoading(false);

        this.photo = photo;

        if (photo.account.isBlocked) {
          this.titleService.setTitle('お探しのページは見つかりませんでした。');
          return;
        }

        // タイトル設定
        const caption = this.photo.caption ? '「' + this.photo.caption + '」' : '';
        const title = caption +
          this.photo.account.name + 'さん(@' + this.photo.account.loginId + ') - ' + APP_TITLE;
        this.titleService.setTitle(title);

        // メタ設定
        this.meta.updateTag({ name: 'description', content: this.photo.caption || '' });
        this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
        this.meta.updateTag({ property: 'og:title', content: title });
        this.meta.updateTag({ property: 'og:type', content: 'article' });
        this.meta.updateTag({ property: 'og:url', content: APP_DOMAIN + '/photo/' + this.photo.cd });
        this.meta.updateTag({ property: 'og:image', content: this.photo.imgUrl });
        this.meta.updateTag({ property: 'og:description', content: this.photo.caption || '' });
      });
    });
  }

  ngOnDestroy() {
    this.meta.removeTag('name=robots');
    this.sub.unsubscribe();
  }

}
