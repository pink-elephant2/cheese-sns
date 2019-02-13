import { Component, OnInit } from '@angular/core';
import { AuthService } from 'shared/service/auth';
import { APP_TITLE } from 'shared/const';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  /** タイトル */
  title = APP_TITLE;

  /** ログイン状態 */
  authenticated = false;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    // ログイン検知
    this.authService.isAuthenticated.subscribe(ret => {
      this.authenticated = Boolean(ret);
    });

    // ドロップダウン初期化
    const option = {
      constrainWidth: false
    };
    const instance = window['M'].Dropdown.init(document.querySelectorAll('.dropdown-trigger'), option);
  }

}
