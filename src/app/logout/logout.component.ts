import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'shared/service/auth';
import { LoadingService } from 'shared/service/loading';

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
    private authService: AuthService,
    private loadingService: LoadingService
  ) { }

  ngOnInit() {
    // ログアウト
    this.loadingService.setLoading(true);
    this.authService.logout().subscribe((ret: boolean) => {
      this.loadingService.setLoading(false);

      // TOP画面へ
      this.router.navigate(['/']);
    }, (error: Response) => {
      this.loadingService.setLoading(false);
      console.error(error);
      // 強制ログアウト
      this.authService.removeSession();
    });
  }

}
