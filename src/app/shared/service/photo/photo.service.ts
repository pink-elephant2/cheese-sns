import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiService } from '../api.service';
import { Photo } from './photo';
import { Comment } from './comment';
import { ApiConst } from 'shared/const';

/**
 * 写真サービス
 */
@Injectable()
export class PhotoService extends ApiService {

  /**
   * 写真を取得する
   */
  public getPhoto(photoCd: string): Observable<Photo> {
    const url = `${ApiConst.PATH.PHOTO}/${photoCd}`;
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
  public likePhoto(photoCd: string): Observable<boolean> {
    const url = `${ApiConst.PATH.PHOTO}/${photoCd}/like`;
    return this.post(url);
  }

  /**
   * 写真のいいねを解除する
   */
  public dislikePhoto(photoCd: string): Observable<boolean> {
    const url = `${ApiConst.PATH.PHOTO}/${photoCd}/dislike`;
    return this.post(url);
  }

  /**
   * 写真にコメントをする
   */
  public comment(photoCd: string, comment: string): Observable<Comment> {
    const url = `${ApiConst.PATH.PHOTO}/${photoCd}/comment`;
    const params = {
      comment: comment
    };
    return this.post(url, params).pipe(map(data => data as Comment));
  }

  /**
   * コメントにいいねをする
   */
  public likeComment(photoCd: string, commentCd: string): Observable<boolean> {
    const url = `${ApiConst.PATH.PHOTO}/${photoCd}/comment/${commentCd}/like`;
    return this.post(url);
  }

  /**
   * コメントにいいねをする
   */
  public dislikeComment(photoCd: string, commentCd: string): Observable<boolean> {
    const url = `${ApiConst.PATH.PHOTO}/${photoCd}/comment/${commentCd}/dislike`;
    return this.post(url);
  }
}
