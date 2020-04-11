import { Component, OnInit } from '@angular/core';
import { APP_TITLE, APP_DESCRIPTION, CommonConst } from 'shared/const';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  /** タイトル */
  title = APP_TITLE;

  /** 説明文 */
  description = APP_DESCRIPTION;

  twitter = CommonConst.SNS.Twitter;

  instagram = CommonConst.SNS.Instagram;

  constructor() { }

  ngOnInit() {
  }

}
