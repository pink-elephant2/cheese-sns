import { Component, OnInit } from '@angular/core';

/**
 * シェアコンポーネント
 */
@Component({
  selector: 'app-share-modal',
  templateUrl: './share-modal.component.html',
  styleUrls: ['./share-modal.component.scss']
})
export class ShareModalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // モーダル
    window['$']('.modal').modal();
  }

  test(): void {
    alert(window.navigator['share']);

    if (typeof window.navigator['share'] === 'undefined') {
      return;
    }

    var shareData = {
      title: document.querySelector('title').textContent,
      text: document.querySelector('meta[name="description"]').getAttribute('content'),
      url: location.href
    };

    navigator['share'](shareData)
      .then(function () {
        // シェア完了後の処理
        alert('success!!');
      })
      .catch(function (error) {
        // シェア失敗時の処理
        alert('error!!');
      });
  }
}
