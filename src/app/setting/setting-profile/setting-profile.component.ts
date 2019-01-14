import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting-profile',
  templateUrl: './setting-profile.component.html',
  styleUrls: ['./setting-profile.component.scss']
})
export class SettingProfileComponent implements OnInit {

  /** プレビュー画像パス */
  blobUrl: string;

  constructor() { }

  ngOnInit() {
    // テキストボックス事前入力
    window['M'].updateTextFields();
    // 文字数カウント
    window['$']('input, textarea').characterCounter();
  }

  onchange(files: FileList): void {
    if (files.length <= 0) {
      return;
    }
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      this.blobUrl = reader.result.toString();
    }, false);
    reader.readAsDataURL(files[0]);
  }

}
