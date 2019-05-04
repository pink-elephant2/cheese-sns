import { Component, OnInit } from '@angular/core';
import { GaService } from 'shared/service/ga';

/**
 * シェアコンポーネント
 */
@Component({
  selector: 'app-share-modal',
  templateUrl: './share-modal.component.html',
  styleUrls: ['./share-modal.component.scss']
})
export class ShareModalComponent implements OnInit {

  constructor(
    private gaService: GaService
  ) { }

  ngOnInit() {
    // モーダル
    window['$']('.modal').modal();
  }

  /**
   * Facebookでシェア
   */
  shareFacebook(): void {
    // Tracking
    this.gaService.sendEvent('share', 'link', 'click', 'Facebook');

    const url = 'https://www.facebook.com/sharer.php?u=' + encodeURIComponent(location.href);
    window.open(url, '_blank', 'noopener');
  }

  /**
   * Twitterでシェア
   */
  shareTwitter(): void {
    // Tracking
    this.gaService.sendEvent('share', 'link', 'click', 'Twitter');

    // TODO シェア内容
    const text = encodeURIComponent(document.title);
    const url = 'https://twitter.com/share?text=' + text + '&url=' + encodeURIComponent(location.href);
    window.open(url, '_blank', 'noopener');
  }

  /**
   * LINEでシェア
   */
  shareLine(): void {
    // Tracking
    this.gaService.sendEvent('share', 'link', 'click', 'LINE');

    // TODO シェア内容
    const text = encodeURIComponent(document.title) + '%20' + encodeURIComponent(location.href);
    const url = 'https://line.me/R/msg/text/?' + text;
    window.open(url, '_blank', 'noopener');
  }

  /**
   * メールでシェア
   */
  shareMail(): void {
    // Tracking
    this.gaService.sendEvent('share', 'link', 'click', 'メール');

    // TODO メール内容
    const subject = '';
    const body = encodeURIComponent(document.title) + '%20' + encodeURIComponent(location.href);
    const url = 'mailto:?subject=' + subject + '&amp;body=' + body;
    location.href = url;
  }

  /**
   * リンクをコピー
   */
  copyLink(): void {
    // Tracking
    this.gaService.sendEvent('share', 'link', 'click', 'コピー');

    document.addEventListener('copy', (e: ClipboardEvent) => {
      e.preventDefault();
      e.clipboardData.setData('text/plain', location.href);
    }, { once: true });
    document.execCommand('copy');

    window['M'].toast({ html: 'リンクがクリップボードにコピーされました。' });
    window['M'].Modal.getInstance(document.getElementById('share-modal')).close(); // TODO インスタンスを@Inputしたほうが良い？
  }
}
