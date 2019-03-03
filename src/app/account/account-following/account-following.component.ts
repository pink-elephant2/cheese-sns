import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FollowService } from 'shared/service/follow';
import { Account } from 'shared/service/account';

@Component({
  selector: 'app-account-following',
  templateUrl: './account-following.component.html',
  styleUrls: ['./account-following.component.scss']
})
export class AccountFollowingComponent implements OnInit {

  /** ログインID */
  @Input() loginId: string;

  /** フォロー数 */
  @Output() followingCount: EventEmitter<number> = new EventEmitter<number>();

  accountList: Account[];

  constructor(
    private followService: FollowService
  ) { }

  ngOnInit() {
    // フォローを取得する
    this.followService.getFollow(this.loginId).subscribe(accountList => {
      this.accountList = accountList;

      // 親にフォロー数を渡す
      setTimeout(() => {
        this.followingCount.emit(this.accountList.length);
      });
    });
  }

}
