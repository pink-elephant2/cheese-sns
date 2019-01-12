import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // タブ初期化
    const instance = window['M'].Tabs.init(document.querySelectorAll('.tabs'), {});
  }

}
