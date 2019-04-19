import { Directive, HostListener, Renderer2, ElementRef, Input, Attribute, HostBinding, OnInit } from '@angular/core';

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
    if (this.src === null) {
      // デフォルト画像セット
      this.src = '/assets/images/account.png';
    }
  }

  @HostListener('load') onLoad() {
    console.group('load');
    console.log(this.src);
    console.log(this.el.nativeElement);
    console.groupEnd();
    // this.renderer.setAttribute(this.el.nativeElement, 'src', this.el.nativeElement.src);
  }

  @HostListener('error') onError() {
    // デフォルト画像セット
    this.renderer.setAttribute(this.el.nativeElement, 'src', '/assets/images/account.png');
  }
}
