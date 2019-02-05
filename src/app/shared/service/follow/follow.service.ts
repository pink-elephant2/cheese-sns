import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../api.service';
import { Account } from '../account/account';

/**
 * フォローサービス
 */
@Injectable()
export class FollowService extends ApiService {

  /** エンドポイント */
  protected url = '/api/v1/account';

  /**
   * フォローを取得する
   */
  public getFollow(loginId: string): Observable<Account[]> {
    const url = `${this.url}/${loginId}/follow`;
    return this.get(url).map(data => data as Account[]);
  }

  /**
   * フォローワーを取得する
   */
  public getFollower(loginId: string): Observable<Account[]> {
    const url = `${this.url}/${loginId}/follower`;
    return this.get(url).map(data => data as Account[]);
  }
}
