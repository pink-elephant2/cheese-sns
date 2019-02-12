import { Component, OnInit } from '@angular/core';

import { LoadingService } from 'shared/service/loading';

/**
 * ローディングコンポーネント
 */
@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  /** ローディング状態 */
  isLoading = false;

  constructor(private service: LoadingService) { }

  ngOnInit() {
    // ローディング検知
    this.service.isLoading.subscribe(ret => {
      this.isLoading = Boolean(ret);
    });
  }

}
