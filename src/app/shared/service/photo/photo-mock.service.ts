import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { PhotoService } from './photo.service';
import { Photo } from './photo';
import { Account } from '../account';
import { Comment } from './comment';
import { Pageable } from 'shared/model';
import { CreateForm } from 'src/app/create/create-form';

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
      cd: 'aaa',
      comment: 'おいしそう😍',
      createAt: new Date('2019/01/01 6:31'),
      account: {
        id: 2,
        loginId: 'ki_ri_mi',
        name: 'KIRIMIちゃん.'
      } as Account,
      isLike: true,
    } as Comment, {
      cd: 'bbb',
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
  } as Photo, {
    id: 7,
    cd: 'ggg',
    caption: '',
    imgUrl: 'assets/images/sample-7.jpg',
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
  public getPhoto(photoCd: string): Observable<Photo> {
    return of(this.photoList.find(photo => photo.cd === photoCd));
  }

  /**
   * 写真を取得する
   */
  public getPhotoList(loginId?: string, pageable?: Pageable): Observable<Photo[]> {
    let photoList = this.photoList;
    if (loginId) {
      photoList = photoList.filter(photo => photo.account.loginId === loginId);
    }
    if (pageable) {
      const start = (pageable.page || 0) * (pageable.size || 20);
      const end = start + (pageable.size || 20);
      photoList = photoList.slice(start, end);
    }
    return of(photoList);
  }

  /**
   * 写真を投稿する
   */
  public postPhoto(form: CreateForm, file: File): Observable<string> {
    const photoCd = 'aaa';
    return of(photoCd);
  }

  /**
   * 写真にいいねをする
   */
  public likePhoto(photoCd: string): Observable<boolean> {
    return of(true);
  }

  /**
   * 写真のいいねを解除する
   */
  public dislikePhoto(photoCd: string): Observable<boolean> {
    return of(true);
  }

  /**
   * 写真にコメントをする
   */
  public comment(photoCd: string, comment: string): Observable<Comment> {
    return of({
      account: {
        loginId: 'my_melody'
      },
      cd: 'zzz',
      comment: comment,
      createAt: new Date
    } as Comment);
  }

  /**
   * コメントにいいねをする
   */
  public likeComment(photoCd: string, commentCd: string): Observable<boolean> {
    return of(true);
  }

  /**
   * コメントのいいねを解除する
   */
  public dislikeComment(photoCd: string, commentCd: string): Observable<boolean> {
    return of(true);
  }
}
