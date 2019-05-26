import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FollowService } from 'shared/service/follow';
import { Account } from 'shared/service/account';

@Component({
  selector: 'app-account-following',
  templateUrl: './account-following.component.html',
  styleUrls: ['./account-following.component.scss']
})
export class AccountFollowingComponent implements OnChanges {

  /** ログインID */
  @Input() loginId: string;

  /** フォロー数 */
  @Output() followingCount: EventEmitter<number> = new EventEmitter<number>();

  accountList: Account[];

  constructor(
    private followService: FollowService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    // ログインIDを渡されない場合(ブロックなど)
    if (!this.loginId) {
      this.accountList = [];
      this.followingCount.emit(0);
      return;
    }

    // フォローを取得する
    this.followService.getFollow(this.loginId).subscribe(accountPage => {
      this.accountList = accountPage.content;

      // 親にフォロー数を渡す
      setTimeout(() => {
        this.followingCount.emit(this.accountList.length);
      });
    });
  }

}
