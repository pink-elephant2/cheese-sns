import { Injectable } from '@angular/core';
import { Response, Http, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

/**
 * APIサービス
 */
@Injectable()
export abstract class ApiService {

  constructor(
    public http: Http
  ) { }

  /**
   * HTTP GET処理
   */
  public get(url: string, params?: Object): Observable<any> {
    if (params) {
      const requestParams = this.setParams(params);
      url += `?${requestParams.toString()}`;
    }
    return this.getObservable(this.http.get(url));
  }

  /**
   * HTTP POST処理
   */
  public post(url: string, params: Object = {}): Observable<any> {
    const header = new Headers();
    header.append('Content-Type', 'application/x-www-form-urlencoded');

    const requestParams = this.setParams(params);

    return this.getObservable(this.http.post(url, requestParams.toString(), { 'headers': header }));
  }

  /**
   * HTTP DELETE処理
   */
  public delete<T>(url: string, params?: Object): Observable<T | T[]> {
    if (params) {
      const requestParams = this.setParams(params);
      url += `?${requestParams.toString()}`;
    }
    return this.getObservable(this.http.delete(url)).map(data => data as T | T[]);
  }

  /**
   * パラメータ整形
   * @param params パラメータ
   */
  private setParams(params: Object): URLSearchParams {
    const requestParams = new URLSearchParams();
    Object.entries(params).forEach(param => {
      if (param[1] instanceof Array) {
        Array.from(param[1]).forEach(p => {
          requestParams.append(`${param[0]}[]`, `${p}`);
        });
      } else {
        requestParams.set(param[0], param[1]);
      }
    });
    return requestParams;
  }

  /**
   * レスポンス情報を処理する。
   * @param o レスポンス情報
   */
  protected getObservable(o: Observable<Response>): Observable<Object> {
    return o.map((res: Response) => {
      let ret: any = {};
      if (res.status >= 200 && res.status < 300) {
        try {
          ret = res.json() || {};
        } catch (e) {
          // No Body
          throw e;
        }
      }
      return ret;
    }).catch((e: any) => {
      console.error(e);
      throw e;
    });
  }
}
