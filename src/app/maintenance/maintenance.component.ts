import { Component, OnInit, OnDestroy } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { CommonConst } from 'shared/const';

/**
 * メンテナンス画面
 */
@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss']
})
export class MaintenanceComponent implements OnInit, OnDestroy {

  twitter = CommonConst.SNS.Twitter;

  constructor(
    private meta: Meta
  ) { }

  ngOnInit() {
    this.meta.addTag({ name: 'robots', content: 'noindex' });
  }

  ngOnDestroy(): void {
    this.meta.removeTag('name=robots');
  }
}
