import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../api.service';
import { Photo } from './photo';

/**
 * 写真サービス
 */
@Injectable()
export class PhotoService extends ApiService {

  /** エンドポイント */
  protected url = '/api/v1/photo';

  /**
   * 写真を取得する
   */
  public getPhoto(cd: string): Observable<Photo> {
    const url = `${this.url}/${cd}`;
    return this.get(url).map(data => data as Photo);
  }

  /**
   * 写真を取得する
   */
  public getPhotoList(): Observable<Photo[]> {
    const url = `${this.url}`;
    return this.get(url).map(data => data as Photo[]);
  }

}
