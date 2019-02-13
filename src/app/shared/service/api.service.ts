import { Injectable } from '@angular/core';
import { HttpResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

/**
 * APIサービス
 * TODO https://qiita.com/ponday/items/1ec0e500cd801286845e
 */
@Injectable()
export abstract class ApiService {

  constructor(
    public http: HttpClient
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
    const header = new HttpHeaders();
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
    return this.getObservable(this.http.delete(url)).pipe(map(data => data as T | T[]));
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
  protected getObservable(o: Observable<Object>): Observable<Object> {
    return o.pipe(map((res: Response) => {
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
    })).pipe(catchError((e: any) => {
      console.error(e);
      throw e;
    }));
  }
}
