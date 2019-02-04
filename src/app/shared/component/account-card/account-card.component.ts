import { Component, OnInit, Input } from '@angular/core';
import { Account } from 'shared/service/account';

/**
 * アカウントカード
 */
@Component({
  selector: 'app-account-card',
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.scss']
})
export class AccountCardComponent implements OnInit {

  /** アカウント情報 */
  @Input() account: Account;

  constructor() { }

  ngOnInit() {
  }

}
