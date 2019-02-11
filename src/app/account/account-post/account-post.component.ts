import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-account-post',
  templateUrl: './account-post.component.html',
  styleUrls: ['./account-post.component.scss']
})
export class AccountPostComponent implements OnInit {

  @Input() loginId: string;

  accountList: Account[];

  constructor() { }

  ngOnInit() {
  }

}
