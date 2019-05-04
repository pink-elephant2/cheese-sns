import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { PhotoService } from './photo.service';
import { Photo } from './photo';
import { Account, AccountMockService } from '../account';
import { Comment } from './comment';
import { Pageable } from 'shared/model';
import { Page } from 'shared/model/page';
import { CreateForm } from 'src/app/create/create-form';

/**
 * 写真サービス
 * モック
 */
@Injectable()
export class PhotoMockService extends PhotoService {

  public static photoList: Photo[] = [{
    id: 1,
    cd: 'aaa',
    caption: '【フォンデュ＆ラクレット】 とろ～り、びよーん♪のおいしいチーズ料理',
    imgUrl: 'assets/images/sample-1.jpg',
    createdAt: new Date('2019/01/01 6:30'),
    account: AccountMockService.accountList[1],
    likeCount: 1,
    isLike: true,
    comments: [{
      cd: 'aaa',
      content: 'おいしそう😍',
      createdAt: new Date('2019/01/01 6:31'),
      account: AccountMockService.accountList[1],
      isLike: true,
    } as Comment, {
      cd: 'bbb',
      content: '作るのだるい',
      createdAt: new Date('2019/01/01 6:32'),
      account: AccountMockService.accountList[2],
      isLike: false,
    } as Comment]
  } as Photo, {
    id: 2,
    cd: 'bbb',
    caption: 'おうちで簡単！SNSで話題のもちもちとろ～りチーズレシピ♡',
    imgUrl: 'assets/images/sample-2.jpg',
    createdAt: new Date('2019/01/28 6:30'),
    account: AccountMockService.accountList[1],
    likeCount: 1,
    isLike: true,
    comments: []
  } as Photo, {
    id: 3,
    cd: 'ccc',
    caption: '',
    imgUrl: 'assets/images/sample-3.jpg',
    createdAt: new Date('2019/01/29 6:30'),
    account: AccountMockService.accountList[1],
    likeCount: 2,
    isLike: true,
    comments: []
  } as Photo, {
    id: 4,
    cd: 'ddd',
    caption: '',
    imgUrl: 'assets/images/sample-4.jpg',
    createdAt: new Date('2019/01/29 12:30'),
    account: AccountMockService.accountList[0],
  } as Photo, {
    id: 5,
    cd: 'eee',
    caption: '',
    imgUrl: 'assets/images/sample-5.jpg',
    createdAt: new Date('2019/01/29 12:30'),
    account: AccountMockService.accountList[1],
    likeCount: 0,
    isLike: false,
    comments: []
  } as Photo, {
    id: 6,
    cd: 'fff',
    caption: 'チーズ好き必見♡とろ〜り食感がたまらない濃厚チーズレシピ6選',
    imgUrl: 'assets/images/sample-6.jpg',
    createdAt: new Date('2019/01/29 12:30'),
    account: AccountMockService.accountList[0],
    likeCount: 1000,
    isLike: false,
    comments: []
  } as Photo, {
    id: 7,
    cd: 'ggg',
    caption: '',
    imgUrl: 'assets/images/sample-7.jpg',
    createdAt: new Date('2019/01/29 12:30'),
    account: AccountMockService.accountList[0],
    likeCount: 1000,
    isLike: false,
    comments: []
  } as Photo
  ];

  /**
   * 写真を取得する
   */
  public getPhoto(photoCd: string): Observable<Photo> {
    return of(PhotoMockService.photoList.find(photo => photo.cd === photoCd));
  }

  /**
   * 写真を取得する
   */
  public getPhotoList(loginId?: string, pageable?: Pageable): Observable<Page<Photo>> {
    let photoList = PhotoMockService.photoList;
    if (loginId) {
      photoList = photoList.filter(photo => photo.account.loginId === loginId);
    }
    if (pageable) {
      const start = (pageable.page || 0) * (pageable.size || 20);
      const end = start + (pageable.size || 20);
      photoList = photoList.slice(start, end);
    }
    return of({
      'content': photoList
    } as Page<Photo>);
  }

  /**
   * 写真を投稿する
   *
   * @returns 写真情報
   */
  public postPhoto(loginId: string, form: CreateForm, file: File): Observable<Photo> {
    return of(PhotoMockService.photoList[0]);
  }

  /**
   * 写真にいいねをする
   */
  public likePhoto(loginId: string, photoCd: string): Observable<boolean> {
    return of(true);
  }

  /**
   * 写真のいいねを解除する
   */
  public dislikePhoto(loginId: string, photoCd: string): Observable<boolean> {
    return of(true);
  }

  /**
   * 写真にコメントをする
   *
   * @returns コメント情報
   */
  public comment(loginId: string, photoCd: string, comment: string): Observable<Comment> {
    return of({
      account: {
        loginId: 'my_melody'
      },
      cd: 'zzz',
      content: comment,
      createdAt: new Date
    } as Comment);
  }

  /**
   * コメントにいいねをする
   */
  public likeComment(loginId: string, photoCd: string, commentCd: string): Observable<boolean> {
    return of(true);
  }

  /**
   * コメントのいいねを解除する
   */
  public dislikeComment(loginId: string, photoCd: string, commentCd: string): Observable<boolean> {
    return of(true);
  }
}
