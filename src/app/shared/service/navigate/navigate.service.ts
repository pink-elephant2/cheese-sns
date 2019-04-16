import { Injectable } from '@angular/core';

/**
 * 画面遷移用サービス
 */
@Injectable({
  providedIn: 'root'
})
export class NavigateService {

  /** ログイン後に遷移する画面 */
  private url: string;

  /** ログイン後に行う処理 */
  private callbackFunctionName: string;

  /** ログイン成功か */
  private _isLoggedIn = false;

  constructor() { }

  /**
   * ログイン後に行う処理を設定する
   *
   * @param url URL
   * @param callbackFunctionName ログイン後に行う処理
   */
  public setAfterLogin(url: string, callbackFunctionName: string): void {
    this.url = url;
    this.callbackFunctionName = callbackFunctionName;
  }

  /**
   * ログイン後に遷移する画面を取得する
   */
  public getAfterLoginUrl(): string {
    return this._isLoggedIn ? this.url : undefined;
  }

  /**
   * ログイン後に行う処理名を取得する
   */
  public getAfterLoginCallback(): string {
    return this._isLoggedIn ? this.callbackFunctionName : undefined;
  }

  /**
   * ログイン成功したか設定する
   */
  public set isLoggedIn(isLoggedIn: boolean) {
    this._isLoggedIn = isLoggedIn;
  }

  /**
   * ログイン後に行う処理をクリアする
   */
  public clearAfterLogin(): void {
    this.url = this.callbackFunctionName = undefined;
    this._isLoggedIn = false;
  }
}
