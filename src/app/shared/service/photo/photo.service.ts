import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

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
    return this.get(url).map(data => data as Photo);
  }

  /**
   * 写真を取得する
   */
  public getPhotoList(): Observable<Photo[]> {
    return this.get(ApiConst.PATH.PHOTO).map(data => data as Photo[]);
  }

}
