import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PhotoCardComponent } from './photo-card.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { PastDateModule } from 'shared/pipe';
import { ShareModalModule } from '../share-modal/share-modal.module';
import { AccountImageModule } from 'shared/directive';
import { PhotoCardMenuComponent } from './photo-card-menu/photo-card-menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    PastDateModule,
    ShareModalModule,
    AccountImageModule
  ],
  declarations: [
    PhotoCardComponent,
    PhotoCardMenuComponent
  ],
  exports: [PhotoCardComponent]
})
export class PhotoCardModule { }
