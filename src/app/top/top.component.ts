import { Component, OnInit } from '@angular/core';
import { Account } from 'shared/service/account';
import { Photo } from 'shared/service/photo';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {

  photo1: Photo;

  constructor() { }

  ngOnInit() {
    this.photo1 = new Photo();
    this.photo1.id = 1;
    this.photo1.cd = 'aaa';
    this.photo1.caption = '【フォンデュ＆ラクレット】 とろ～り、びよーん♪のおいしいチーズ料理';
    this.photo1.imgUrl = 'assets/images/sample-1.jpg';
    this.photo1.createAt = new Date('2019/01/27 6:30');
    this.photo1.account = new Account();
    this.photo1.account.loginId = 'ki_ri_mi';
  }

}
