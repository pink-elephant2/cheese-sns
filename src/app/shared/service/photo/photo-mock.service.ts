import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { PhotoService } from './photo.service';
import { Photo } from './photo';
import { Account } from '../account';
import { Comment } from './comment';

/**
 * 写真サービス
 * モック
 */
@Injectable()
export class PhotoMockService extends PhotoService {

  private photoList: Photo[] = [{
    id: 1,
    cd: 'aaa',
    caption: '【フォンデュ＆ラクレット】 とろ～り、びよーん♪のおいしいチーズ料理',
    imgUrl: 'assets/images/sample-1.jpg',
    createAt: new Date('2019/01/01 6:30'),
    account: {
      id: 2,
      loginId: 'ki_ri_mi',
      name: 'KIRIMIちゃん.'
    } as Account,
    likeCount: 1,
    isLike: true,
    comments: [{
      comment: 'おいしそう😍',
      createAt: new Date('2019/01/01 6:31'),
      account: {
        id: 2,
        loginId: 'ki_ri_mi',
        name: 'KIRIMIちゃん.'
      } as Account,
      isLike: true,
    } as Comment, {
      comment: '作るのだるい',
      createAt: new Date('2019/01/01 6:32'),
      account: {
        id: 3,
        loginId: 'gudetama',
        name: 'ぐでたま'
      } as Account,
      isLike: false,
    } as Comment]
  } as Photo, {
    id: 2,
    cd: 'bbb',
    caption: 'おうちで簡単！SNSで話題のもちもちとろ～りチーズレシピ♡',
    imgUrl: 'assets/images/sample-2.jpg',
    createAt: new Date('2019/01/28 6:30'),
    account: {
      id: 2,
      loginId: 'ki_ri_mi',
      name: 'KIRIMIちゃん.'
    } as Account,
    likeCount: 1,
    isLike: true,
    comments: []
  } as Photo, {
    id: 3,
    cd: 'ccc',
    caption: '',
    imgUrl: 'assets/images/sample-3.jpg',
    createAt: new Date('2019/01/29 6:30'),
    account: {
      id: 2,
      loginId: 'ki_ri_mi',
      name: 'KIRIMIちゃん.'
    } as Account,
    likeCount: 2,
    isLike: true,
    comments: []
  } as Photo, {
    id: 4,
    cd: 'ddd',
    caption: '',
    imgUrl: 'assets/images/sample-4.jpg',
    createAt: new Date('2019/01/29 12:30'),
    account: {
      id: 2,
      loginId: 'ki_ri_mi',
      name: 'KIRIMIちゃん.'
    } as Account,
  } as Photo, {
    id: 5,
    cd: 'eee',
    caption: '',
    imgUrl: 'assets/images/sample-5.jpg',
    createAt: new Date('2019/01/29 12:30'),
    account: {
      id: 2,
      loginId: 'ki_ri_mi',
      name: 'KIRIMIちゃん.'
    } as Account,
    likeCount: 0,
    isLike: false,
    comments: []
  } as Photo, {
    id: 6,
    cd: 'fff',
    caption: 'チーズ好き必見♡とろ〜り食感がたまらない濃厚チーズレシピ6選',
    imgUrl: 'assets/images/sample-6.jpg',
    createAt: new Date('2019/01/29 12:30'),
    account: {
      id: 1,
      loginId: 'my_melody',
      name: 'マイメロディ'
    } as Account,
    likeCount: 1000,
    isLike: false,
    comments: []
  } as Photo
  ];

  /**
   * 写真を取得する
   */
  public getPhoto(cd: string): Observable<Photo> {
    return of(this.photoList.find(photo => photo.cd === cd));
  }

  /**
   * 写真を取得する
   */
  public getPhotoList(): Observable<Photo[]> {
    return of(this.photoList);
  }

  /**
   * 写真にいいねをする
   */
  public likePhoto(cd: string): Observable<boolean> {
    return of(true);
  }

  /**
   * 写真のいいねを解除する
   */
  public dislikePhoto(cd: string) {
    return of(true);
  }
}
