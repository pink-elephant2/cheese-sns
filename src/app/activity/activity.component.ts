import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { APP_TITLE } from 'shared/const';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  constructor(
    private titleService: Title
  ) { }

  ngOnInit() {
    // タイトル設定
    const title = '' + 'さん(@' + '' + ')のアクティビティ - ' + APP_TITLE;
    // const title = this.account.name + 'さん(@' + this.account.loginId + ')のアクティビティ - ' + APP_TITLE;
    this.titleService.setTitle(title);

    // タブ初期化
    const instance = window['M'].Tabs.init(document.querySelectorAll('.tabs'), {});
  }

}
