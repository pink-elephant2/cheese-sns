import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

import { FollowService } from '../../shared/service/follow';
import { Account } from '../../shared/service/account';
import { Page, Pageable } from 'shared/model';

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

  accountData: Page<Account>;

  constructor(
    private router: Router,
    private followService: FollowService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    // ログインIDを渡されない場合(ブロックなど)
    if (!this.loginId) {
      this.followingCount.emit(0);
      return;
    }

    // フォローを取得する
    this.getFollow();
  }

  /**
   * フォローを取得する
   */
  getFollow(page?: number) {
    const pageable = {
      page: page || 0
    } as Pageable;

    // フォローを取得する
    this.followService.getFollow(this.loginId, pageable).subscribe(accountData => {
      this.accountData = accountData;

      // 親にフォロー数を渡す
      setTimeout(() => {
        this.followingCount.emit(this.accountData.totalElements);
      });
    }, () => {
      this.router.navigate(['logout']);
    });
  }
}
