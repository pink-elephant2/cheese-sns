import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'shared/service/auth';

/**
 * ログアウト画面
 */
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    // ログアウト
    this.authService.logout().subscribe((ret: boolean) => {
      // TOP画面へ
      this.router.navigate(['/']);
    }, (error: Response) => {
      console.error(error);
      // 強制ログアウト
      this.authService.removeSession();
    });
  }

}
