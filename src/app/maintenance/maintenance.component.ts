import { Component, OnInit } from '@angular/core';
import { CommonConst } from 'shared/const';

/**
 * メンテナンス画面
 */
@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss']
})
export class MaintenanceComponent implements OnInit {

  twitter = CommonConst.SNS.Twitter;

  constructor() { }

  ngOnInit() {
  }

}
