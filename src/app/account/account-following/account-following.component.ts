import { Component, OnInit, Input } from '@angular/core';
import { FollowService } from 'shared/service/follow';
import { Account } from 'shared/service/account';

@Component({
  selector: 'app-account-following',
  templateUrl: './account-following.component.html',
  styleUrls: ['./account-following.component.scss']
})
export class AccountFollowingComponent implements OnInit {

  @Input() loginId: string;

  accountList: Account[];

  constructor(
    private followService: FollowService
  ) { }

  ngOnInit() {
    // フォローを取得する
    this.followService.getFollow(this.loginId).subscribe(accountList => {
      this.accountList = accountList;
    });
  }

}
