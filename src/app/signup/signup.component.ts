import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/**
 * アカウント作成画面
 */
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    // TODO 未作成のため暫定でログイン画面へ
    this.router.navigate(['/login']);
  }

}
