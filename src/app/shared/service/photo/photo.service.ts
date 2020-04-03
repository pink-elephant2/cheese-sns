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
      'loginId': loginId
    } : {};
    return this.get<Page<Photo>>(ApiConst.PATH.PHOTO, Object.assign(params, pageable));
  }

  /**
   * 写真を投稿する
   *
   * @returns 写真情報
   */
  public postPhoto(loginId: string, form: CreateForm, file: File): Observable<Photo> {
    const url = `${ApiConst.PATH.USER}/${loginId}/${ApiConst.PATH.PHOTO_CREATE}`;
    const data = new FormData();
    data.append('upfile', file, form.upfile);
    data.append('caption', form.caption);
    data.append('tags', form.tags.toString());
    // form.tags.forEach(tag => data.append('tags[]', tag));
    return this.post<Photo>(url, data);
  }

  /**
   * 動画を投稿する
   * TODO VideoServiceに移行
   *
   * @returns 動画情報
   */
  public postVideo(loginId: string, form: CreateForm, file: File): Observable<Photo> {
    const url = `${ApiConst.PATH.USER}/${loginId}/video`;
    const data = new FormData();
    data.append('upfile', file, form.upfile);
    data.append('caption', form.caption);
    return this.post<Photo>(url, data);
  }

  /**
   * 写真にいいねをする
   */
  public likePhoto(loginId: string, photoCd: string): Observable<boolean> {
    const url = `${ApiConst.PATH.USER}/${loginId}/${ApiConst.PATH.PHOTO_CREATE}/${photoCd}/${ApiConst.PATH.PHOTO_LIKE}`;
    return this.post<boolean>(url);
  }

  /**
   * 写真のいいねを解除する
   */
  public dislikePhoto(loginId: string, photoCd: string): Observable<boolean> {
    const url = `${ApiConst.PATH.USER}/${loginId}/${ApiConst.PATH.PHOTO_CREATE}/${photoCd}/${ApiConst.PATH.PHOTO_DISLIKE}`;
    return this.post<boolean>(url);
  }

  /**
   * 写真にコメントをする
   *
   * @returns コメント情報
   */
  public comment(loginId: string, photoCd: string, comment: string): Observable<Comment> {
    const url = `${ApiConst.PATH.USER}/${loginId}/${ApiConst.PATH.PHOTO_CREATE}/${photoCd}/${ApiConst.PATH.PHOTO_COMMENT}`;
    const params = {
      'comment': comment
    };
    return this.post<Comment>(url, params);
  }

  /**
   * コメントにいいねをする
   */
  public likeComment(loginId: string, photoCd: string, commentCd: string): Observable<boolean> {
    const url = `${ApiConst.PATH.USER}/${loginId}/${ApiConst.PATH.PHOTO_CREATE}/${photoCd}/${ApiConst.PATH.PHOTO_COMMENT}/${commentCd}/${ApiConst.PATH.PHOTO_LIKE}`;
    return this.post<boolean>(url);
  }

  /**
   * コメントにいいねをする
   */
  public dislikeComment(loginId: string, photoCd: string, commentCd: string): Observable<boolean> {
    const url = `${ApiConst.PATH.USER}/${loginId}/${ApiConst.PATH.PHOTO_CREATE}/${photoCd}/${ApiConst.PATH.PHOTO_COMMENT}/${commentCd}/${ApiConst.PATH.PHOTO_DISLIKE}`;
    return this.post<boolean>(url);
  }

  /**
   * 写真を通報する
   */
  public report(photoCd: string, reason: any): Observable<boolean> {
    const url = `${ApiConst.PATH.PHOTO}/${photoCd}/${ApiConst.PATH.PHOTO_REPORT}`;
    const params = {
      reason: reason
    };
    return this.post<boolean>(url, params);
  }

  /**
   * 写真を削除する
   */
  public remove(loginId: string, photoCd: string): Observable<boolean> {
    const url = `${ApiConst.PATH.USER}/${loginId}/${ApiConst.PATH.PHOTO_CREATE}/${photoCd}/${ApiConst.PATH.PHOTO_REMOVE}`;
    return this.post<boolean>(url);
  }

  /**
   * サジェストを取得する
   */
  public suggest(keyword: string): Observable<string[]> {
    const url = `/api/v1/photo/suggest/${keyword}`;
    return this.get<boolean>(url);
  }
}
