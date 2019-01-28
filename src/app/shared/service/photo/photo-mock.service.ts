import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PhotoService } from './photo.service';
import { Photo } from './photo';
import { Account } from '../account';

/**
 * 写真サービス
 * モック
 */
@Injectable()
export class PhotoMockService extends PhotoService {

  /**
   * 写真を取得する
   */
  public getPhoto(cd: string): Observable<Photo> {
    let photo = new Photo();
    const photo1 = new Photo();
    photo1.id = 1;
    photo1.cd = 'aaa';
    photo1.caption = '【フォンデュ＆ラクレット】 とろ～り、びよーん♪のおいしいチーズ料理';
    photo1.imgUrl = 'assets/images/sample-1.jpg';
    photo1.createAt = new Date('2019/01/27 6:30');
    photo1.account = new Account();
    photo1.account.loginId = 'ki_ri_mi';

    const photos: Photo[] = [];
    photos.push(photo1);

    return Observable.of(photo);
  }

  /**
   * 写真を取得する
   */
  public getPhotoList(): Observable<Photo> {
    let photo = new Photo();
    const photo1 = new Photo();
    photo1.id = 1;
    photo1.cd = 'aaa';
    photo1.caption = '【フォンデュ＆ラクレット】 とろ～り、びよーん♪のおいしいチーズ料理';
    photo1.imgUrl = 'assets/images/sample-1.jpg';
    photo1.createAt = new Date('2019/01/27 6:30');
    photo1.account = new Account();
    photo1.account.loginId = 'ki_ri_mi';

    return Observable.of(photo);
  }

}
