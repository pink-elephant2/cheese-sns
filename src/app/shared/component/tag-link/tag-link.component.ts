import { Component, OnInit, Input } from '@angular/core';

/**
 * ハッシュタグをアンカーリンクに変換する
 */
@Component({
  selector: 'app-tag-link',
  templateUrl: './tag-link.component.html',
  styleUrls: ['./tag-link.component.scss']
})
export class TagLinkComponent implements OnInit {

  @Input() value = '';

  @Input() isBr: boolean;

  constructor() { }

  ngOnInit(): void {
    // リンク設定
    if (this.value) {
      (this.value.match(/[#＃][Ａ-Ｚａ-ｚA-Za-z一-鿆0-9０-９ぁ-ヶｦ-ﾟー._-]+/gm) || [])
        .forEach(tag => {
          // TODO routerLink
          // TODO appThemeColorText
          this.value = this.value.replace(tag, '<a appThemeColorText="mainLink" href="/hashtag/' + tag.substring(1) + '">' + tag + '</a>');
        });
    }
  }

}
