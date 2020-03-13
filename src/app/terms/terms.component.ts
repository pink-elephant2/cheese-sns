import { Component, OnInit } from '@angular/core';
import { APP_TITLE, APP_PRODUCER } from '../shared/const';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {

  /** アプリ名 */
  appTitle = APP_TITLE;

  /** 製作者 */
  appProducer = APP_PRODUCER;

  constructor() { }

  ngOnInit() {
  }

}
