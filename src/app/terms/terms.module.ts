import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermsComponent } from './terms.component';
import { TermsRoutingModule } from './terms-routing.module';
import { ThemeColorModule } from 'shared/directive/theme-color';

@NgModule({
  imports: [
    CommonModule,
    TermsRoutingModule,
    ThemeColorModule
  ],
  declarations: [TermsComponent],
  exports: [TermsComponent]
})
export class TermsModule { }
