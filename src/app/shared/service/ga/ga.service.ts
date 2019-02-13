import { Injectable } from '@angular/core';
import { environment } from 'env/environment';

declare let gtag: any; // グローバル変数gtagを解決

/**
 * GoogleAnalyticsサービス
 */
@Injectable({
  providedIn: 'root'
})
export class GaService {

  constructor() { }

  /**
   * GAの読み込みをチェック
   */
  private useGA(): boolean {
    if (!environment.analytics.id) {
      return false;
    }
    return typeof gtag !== undefined;
  }

  /**
   * ページトラッキング
   * @param url URLのパス。スラッシュで始まる必要がある。
   */
  sendPageView(url: string): void {
    if (!this.useGA()) { return; }
    if (!url.startsWith('/')) { url = `/${url}`; }
    gtag('config', environment.analytics.id, {
      page_path: url
    });
  }
  /**
   * イベントトラッキング
   * @param eventCategory (e.g. 'Video')
   * @param eventAction (e.g. 'play')
   * @param eventLabel (e.g. 'play campaign CM')
   */
  sendEvent(eventName: string, eventCategory: string, eventAction: string, eventLabel: any): void {
    if (!this.useGA()) { return; }
    gtag('event', eventName, {
      event_category: eventCategory,
      event_action: eventAction,
      event_label: eventLabel
    });
  }
}
