import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // ドロップダウン初期化
    const option = {
      constrainWidth: false
    };
    const instance = window['M'].Dropdown.init(document.querySelectorAll('.dropdown-trigger'), option);
  }

}
