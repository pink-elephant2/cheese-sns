import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiService } from '../api.service';
import { Photo } from './photo';
import { Comment } from './comment';
import { ApiConst } from 'shared/const';
import { Pageable } from 'shared/model';
import { CreateForm } from 'src/app/create/create-form';

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
    return this.get<Photo>(url);
  }

  /**
   * 写真を取得する
   */
  public getPhotoList(loginId?: string, pageable?: Pageable): Observable<Photo[]> {
    const params: {} = pageable;
    params['loginId'] = loginId;
    return this.get<Photo[]>(ApiConst.PATH.PHOTO, params);
  }

  /**
   * 写真を投稿する
   */
  public postPhoto(form: CreateForm, file: File): Observable<string> {
    const data = new FormData();
    data.append('upfile', file, form.upfile);
    data.append('caption', form.caption);
    return this.post(ApiConst.PATH.PHOTO, data);
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
