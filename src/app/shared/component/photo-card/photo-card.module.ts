import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PhotoCardComponent } from './photo-card.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { PastDateModule, SafeHtmlModule } from 'shared/pipe';
import { ShareModalModule } from '../share-modal/share-modal.module';
import { AccountImageModule } from 'shared/directive';
import { PhotoCardMenuComponent } from './photo-card-menu/photo-card-menu.component';
import { ThemeColorModule } from 'shared/directive/theme-color';
import { TagLinkModule } from '../tag-link/tag-link.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    PastDateModule,
    SafeHtmlModule,
    ShareModalModule,
    AccountImageModule,
    ThemeColorModule,
    TagLinkModule
  ],
  declarations: [
    PhotoCardComponent,
    PhotoCardMenuComponent
  ],
  exports: [PhotoCardComponent]
})
export class PhotoCardModule { }
