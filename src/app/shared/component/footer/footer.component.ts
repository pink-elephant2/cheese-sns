import { Component, OnInit } from '@angular/core';
import { APP_TITLE } from 'shared/const';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  /** タイトル */
  title = APP_TITLE;

  constructor() { }

  ngOnInit() {
  }

}
