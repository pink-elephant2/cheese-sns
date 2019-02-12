import { Component, OnInit, Input } from '@angular/core';
import { FollowService } from 'shared/service/follow';
import { Account } from 'shared/service/account';

@Component({
  selector: 'app-account-followers',
  templateUrl: './account-followers.component.html',
  styleUrls: ['./account-followers.component.scss']
})
export class AccountFollowersComponent implements OnInit {

  @Input() loginId: string;

  accountList: Account[];

  constructor(
    private followService: FollowService
  ) { }

  ngOnInit() {
    // フォローワーを取得する
    this.followService.getFollower(this.loginId).subscribe(accountList => {
      this.accountList = accountList;
    });
  }

}
