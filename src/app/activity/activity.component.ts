import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // タブ初期化
    const instance = window['M'].Tabs.init(document.querySelectorAll('.tabs'), {});
  }

}
