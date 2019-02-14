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

}
