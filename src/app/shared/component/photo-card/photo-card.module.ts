import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PhotoCardComponent } from './photo-card.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { PastDateModule } from 'shared/pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    PastDateModule
  ],
  declarations: [PhotoCardComponent],
  exports: [PhotoCardComponent]
})
export class PhotoCardModule { }
