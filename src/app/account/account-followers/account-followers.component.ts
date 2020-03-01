import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

import { FollowService } from '../../shared/service/follow';
import { Account } from '../../shared/service/account';
import { Page, Pageable } from 'shared/model';

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

  accountData: Page<Account>;

  constructor(
    private router: Router,
    private followService: FollowService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    // ログインIDを渡されない場合(ブロックなど)
    if (!this.loginId) {
      this.followersCount.emit(0);
      return;
    }

    // フォローワーを取得する
    this.getFollower();
  }

  /**
   * フォローワーを取得する
   */
  getFollower(page?: number) {
    const pageable = {
      page: page || 0
    } as Pageable;

    // フォローワーを取得する
    this.followService.getFollower(this.loginId, pageable).subscribe(accountData => {
      this.accountData = accountData;

      // 親にフォローワー数を渡す
      setTimeout(() => {
        this.followersCount.emit(this.accountData.totalElements);
      });
    }, () => {
      this.router.navigate(['logout']);
    });
  }
}
