import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/**
 * ローディングサービス
 */
@Injectable()
export class LoadingService {

  constructor() { }

  /** ローディング検知 */
  public isLoading = new BehaviorSubject<boolean>(null);

  /**
   * ローディング状態を設定する
   */
  public setLoading(isLoading: boolean) {
    this.isLoading.next(isLoading);
  }
}
