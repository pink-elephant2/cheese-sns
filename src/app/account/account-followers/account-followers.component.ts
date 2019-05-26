import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FollowService } from 'shared/service/follow';
import { Account } from 'shared/service/account';

@Component({
  selector: 'app-account-followers',
  templateUrl: './account-followers.component.html',
  styleUrls: ['./account-followers.component.scss']
})
export class AccountFollowersComponent implements OnChanges {

  /** ログインID */
  @Input() loginId: string;

  /** フォローワー数 */
  @Output() followersCount: EventEmitter<number> = new EventEmitter<number>();

  accountList: Account[];

  constructor(
    private followService: FollowService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    // ログインIDを渡されない場合(ブロックなど)
    if (!this.loginId) {
      this.accountList = [];
      this.followersCount.emit(0);
      return;
    }

    // フォローワーを取得する
    this.followService.getFollower(this.loginId).subscribe(accountPage => {
      this.accountList = accountPage.content;

      // 親にフォローワー数を渡す
      setTimeout(() => {
        this.followersCount.emit(this.accountList.length);
      });
    });
  }

}
