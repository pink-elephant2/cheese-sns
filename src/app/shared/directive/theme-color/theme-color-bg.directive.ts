import { Directive, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';
import { ThemeService, ColorPatternEnum } from 'shared/service/theme';

/**
 * テーマカラーディレクティブ
 * 背景色
 */
@Directive({
  selector: '[appThemeColorBg]'
})
export class ThemeColorBgDirective implements OnInit {

  @Input('appThemeColorBg') pattern: ColorPatternEnum;

  /** テーマ変更前のクラス */
  private classList: string[] = [];

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private themeService: ThemeService
  ) { }

  ngOnInit(): void {
    // テーマ変更検知
    this.themeService.myThemeNoChanges.subscribe(ret => {
      this.setClass();
    });
  }

  setClass() {
    // テーマ変更前の適用クラスを削除
    this.classList.forEach(cls => {
      this.renderer.removeClass(this.el.nativeElement, cls);
    });

    const classList: string[] = this.classList = this.themeService.getBgColors(this.pattern);

    // 要素に適用する
    classList.forEach(cls => {
      this.renderer.addClass(this.el.nativeElement, cls);
    });
  }
}
