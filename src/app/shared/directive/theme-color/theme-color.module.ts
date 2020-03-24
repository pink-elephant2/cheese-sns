import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeColorBgDirective } from './theme-color-bg.directive';
import { ThemeColorTextDirective } from './theme-color-text.directive';


@NgModule({
  declarations: [
    ThemeColorBgDirective,
    ThemeColorTextDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ThemeColorBgDirective,
    ThemeColorTextDirective
  ]
})
export class ThemeColorModule { }
