import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { AppRoutingModule } from '../../../app-routing.module';
import { ThemeColorModule } from 'shared/directive/theme-color';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    ThemeColorModule
  ],
  declarations: [FooterComponent],
  exports: [FooterComponent]
})
export class FooterModule { }
