import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivacyComponent } from './privacy.component';
import { PrivacyRoutingModule } from './privacy-routing.module';
import { ThemeColorModule } from 'shared/directive/theme-color';

@NgModule({
  imports: [
    CommonModule,
    PrivacyRoutingModule,
    ThemeColorModule
  ],
  declarations: [PrivacyComponent],
  exports: [PrivacyComponent]
})
export class PrivacyModule { }
