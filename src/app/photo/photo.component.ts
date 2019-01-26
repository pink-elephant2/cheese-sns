import { Component, OnInit } from '@angular/core';
import { Photo } from 'shared/service/photo';
import { Account } from 'shared/service/account';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  photo: Photo;

  constructor() { }

  ngOnInit() {
    this.photo = new Photo();
    this.photo.id = 1;
    this.photo.cd = 'aaa';
    this.photo.caption = '【フォンデュ＆ラクレット】 とろ～り、びよーん♪のおいしいチーズ料理';
    this.photo.imgUrl = 'assets/images/sample-1.jpg';
    this.photo.createAt = new Date('2019/01/27 6:30');
    this.photo.account = new Account();
    this.photo.account.loginId = 'ki_ri_mi';
  }

}
