import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../api.service';
import { Page, Pageable } from 'shared/model';
import { Photo } from '../photo';

/**
 * ブックマークサービス
 */
@Injectable()
export class BookmarkService extends ApiService {

  /**
   * ブックマークを取得する
   */
  public getBookmarkList(loginId: string, pageable: Pageable): Observable<Page<Photo>> {
    const url = `/api/v1/user/${loginId}/bookmark`;
    return this.get<Page<Photo>>(url, pageable);
  }

  /**
   * ブックマークを登録する
   */
  public postBookmark(loginId: string, photoCd: string): Observable<Photo> {
    const url = `/api/v1/user/${loginId}/bookmark`;
    const params = {
      'photoCd': photoCd
    };
    return this.post<Photo>(url, params);
  }

  /**
   * ブックマークを削除する
   */
  public removeBookmark(loginId: string, bookmarkId: number): Observable<boolean> {
    const url = `/api/v1/user/${loginId}/bookmark/${bookmarkId}`;
    return this.delete<Photo>(url);
  }
}
