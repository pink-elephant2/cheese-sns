import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../api.service';
import { Photo } from './photo';
import { Comment } from './comment';
import { ApiConst } from 'shared/const';
import { Pageable } from 'shared/model';
import { Page } from 'shared/model/page';
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
  public getPhotoList(loginId?: string, pageable?: Pageable): Observable<Page<Photo>> {
    const params = loginId ? {
      loginId: loginId
    } : {};
    return this.get<Page<Photo>>(ApiConst.PATH.PHOTO, Object.assign(params, pageable));
  }

  /**
   * 写真を投稿する
   *
   * @returns 写真情報
   */
  public postPhoto(form: CreateForm, file: File): Observable<Photo> {
    const data = new FormData();
    data.append('upfile', file, form.upfile);
    data.append('caption', form.caption);
    return this.post<Photo>(ApiConst.PATH.PHOTO, data);
  }

  /**
   * 写真にいいねをする
   */
  public likePhoto(photoCd: string): Observable<boolean> {
    const url = `${ApiConst.PATH.PHOTO}/${photoCd}/like`;
    return this.post<boolean>(url);
  }

  /**
   * 写真のいいねを解除する
   */
  public dislikePhoto(photoCd: string): Observable<boolean> {
    const url = `${ApiConst.PATH.PHOTO}/${photoCd}/dislike`;
    return this.post<boolean>(url);
  }

  /**
   * 写真にコメントをする
   *
   * @returns コメント情報
   */
  public comment(photoCd: string, comment: string): Observable<Comment> {
    const url = `${ApiConst.PATH.PHOTO}/${photoCd}/comment`;
    const params = {
      comment: comment
    };
    return this.post<Comment>(url, params);
  }

  /**
   * コメントにいいねをする
   */
  public likeComment(photoCd: string, commentCd: string): Observable<boolean> {
    const url = `${ApiConst.PATH.PHOTO}/${photoCd}/comment/${commentCd}/like`;
    return this.post<boolean>(url);
  }

  /**
   * コメントにいいねをする
   */
  public dislikeComment(photoCd: string, commentCd: string): Observable<boolean> {
    const url = `${ApiConst.PATH.PHOTO}/${photoCd}/comment/${commentCd}/dislike`;
    return this.post<boolean>(url);
  }
}
