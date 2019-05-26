import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { catchError } from 'rxjs/operators';

import { AccountService, Account } from 'shared/service/account';
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

  /** 写真が存在しない */
  isNotFound = false;

  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
    private accountService: AccountService,
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
          this.isNotFound = true;
        }
        throw error;
      })).subscribe(photo => {
        this.loadingService.setLoading(false);

        // 投稿者を取得 TODO API側で処理すること
        this.accountService.getAccount(photo.account.loginId).subscribe((account: Account) => {

          this.photo = photo;
          this.photo.account = account;

          if (this.photo.account.isBlocked) {
            this.titleService.setTitle('お探しのページは見つかりませんでした。');
            return;
          }
          // タイトル設定
          const caption = this.photo.caption ? '「' + this.photo.caption + '」' : '';
          const title = this.photo.account.name + 'さん(@' + this.photo.account.loginId + ')'
            + caption + ' - ' + APP_TITLE;
          this.titleService.setTitle(title);
        });
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
