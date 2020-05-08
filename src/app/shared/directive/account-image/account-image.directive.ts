import { Directive, HostListener, Renderer2, ElementRef, Input, HostBinding, OnInit } from '@angular/core';
import { ACCOUNT_DEFAULT_IMG_PATH } from 'shared/const';

/**
 * アカウント画像ディレクティブ
 */
@Directive({
  selector: 'img[appAccountImage]'
})
export class AccountImageDirective implements OnInit {

  @HostBinding('attr.src') @Input() src: string;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef
  ) {
  }

  ngOnInit(): void {
    if (this.src === undefined || this.src === null) {
      // デフォルト画像セット
      this.src = ACCOUNT_DEFAULT_IMG_PATH;
    }
  }

  @HostListener('error') onError() {
    // デフォルト画像セット
    this.renderer.setAttribute(this.el.nativeElement, 'src', ACCOUNT_DEFAULT_IMG_PATH);
  }
}
