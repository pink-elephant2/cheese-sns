import { Component, OnInit, Input } from '@angular/core';
import { Photo } from 'shared/service/photo';

/**
 * 写真カード
 */
@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss']
})
export class PhotoCardComponent implements OnInit {

  /** 写真情報 */
  @Input() photo: Photo;

  /** コメント入力フォームを表示するか */
  @Input() hasInputComment: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
