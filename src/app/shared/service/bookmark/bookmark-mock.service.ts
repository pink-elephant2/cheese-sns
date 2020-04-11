import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { BookmarkService } from './bookmark.service';
import { Page, Pageable } from 'shared/model';
import { Photo } from '../photo';

/**
 * ブックマークサービス
 * モック
 */
@Injectable()
export class BookmarkMockService extends BookmarkService {

  /**
   * ブックマークを取得する
   */
  public getBookmarkList(loginId?: string, pageable?: Pageable): Observable<Page<Photo>> {
    // TODO 実装
    return of();
  }


  /**
   * ブックマークを登録する
   */
  public postBookmark(loginId: string, photoCd: string): Observable<Photo> {
    // TODO 実装
    return of();
  }

  /**
   * ブックマークを削除する
   */
  public removeBookmark(loginId: string, bookmarkId: number): Observable<boolean> {
    return of(true);
  }
}
