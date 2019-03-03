import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-account-post',
  templateUrl: './account-post.component.html',
  styleUrls: ['./account-post.component.scss']
})
export class AccountPostComponent implements OnInit {

  @Input() loginId: string;

  /** 投稿数 */
  @Output() postCount: EventEmitter<number> = new EventEmitter<number>();

  accountList: Account[];

  constructor() { }

  ngOnInit() {
    // 親に投稿数を渡す
    setTimeout(() => {
      this.postCount.emit(4);
    });
  }

}
