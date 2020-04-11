import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonConst } from 'shared/const';

/**
 * Twitter
 */
@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.scss']
})
export class TwitterComponent implements OnInit, AfterViewInit {

  twitter = CommonConst.SNS.Twitter;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // Twitterタイムライン埋め込み
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.charset = 'utf-8';
    script.async = true;
    document.body.appendChild(script);
  }
}
