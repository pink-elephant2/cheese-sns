import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiService } from '../api.service';
import { Photo } from './photo';
import { ApiConst } from 'shared/const';

/**
 * 写真サービス
 */
@Injectable()
export class PhotoService extends ApiService {

  /**
   * 写真を取得する
   */
  public getPhoto(cd: string): Observable<Photo> {
    const url = `${ApiConst.PATH.PHOTO}/${cd}`;
    return this.get(url).pipe(map(data => data as Photo));
  }

  /**
   * 写真を取得する
   */
  public getPhotoList(): Observable<Photo[]> {
    return this.get(ApiConst.PATH.PHOTO).pipe(map(data => data as Photo[]));
  }

  /**
   * 写真にいいねをする
   */
  public likePhoto(cd: string): Observable<boolean> {
    const url = `${ApiConst.PATH.PHOTO}/${cd}/like`;
    return this.post(url);
  }

  /**
   * 写真のいいねを解除する
   */
  public dislikePhoto(cd: string) {
    const url = `${ApiConst.PATH.PHOTO}/${cd}/dislike`;
    return this.post(url);
  }
}
