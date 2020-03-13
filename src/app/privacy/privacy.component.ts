import { Component, OnInit } from '@angular/core';
import { APP_PRODUCER } from 'shared/const';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent implements OnInit {

  /** 製作者 */
  appProducer = APP_PRODUCER;

  constructor() { }

  ngOnInit() {
  }

}
