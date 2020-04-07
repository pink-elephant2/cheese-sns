import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagLinkComponent } from './tag-link.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ThemeColorModule } from 'shared/directive/theme-color';



@NgModule({
  declarations: [TagLinkComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    ThemeColorModule
  ],
  exports: [
    TagLinkComponent
  ]
})
export class TagLinkModule { }
