import { Component, OnInit } from '@angular/core';

/**
 * メンテナンス画面
 *
 * 本コンポーネントは /assets/html/maintenance.htmlを作るためのもの。実際はアクセスさせない想定
 */
@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss']
})
export class MaintenanceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
