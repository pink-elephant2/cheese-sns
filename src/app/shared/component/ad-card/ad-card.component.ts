import { Component, OnInit } from '@angular/core';
import { ACCOUNT_DEFAULT_IMG_PATH } from 'shared/const';

@Component({
  selector: 'app-ad-card',
  templateUrl: './ad-card.component.html',
  styleUrls: ['./ad-card.component.scss']
})
export class AdCardComponent implements OnInit {

  /** アカウントデフォルト画像パス */
  imgPath = ACCOUNT_DEFAULT_IMG_PATH;

  constructor() { }

  ngOnInit(): void {
  }

}
