import { Component, OnInit } from '@angular/core';
import { AuthService } from 'shared/service/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  /** ログイン状態 */
  authenticated: boolean;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authenticated = this.authService.authenticated;

    // ドロップダウン初期化
    const option = {
      constrainWidth: false
    };
    const instance = window['M'].Dropdown.init(document.querySelectorAll('.dropdown-trigger'), option);
  }

}
