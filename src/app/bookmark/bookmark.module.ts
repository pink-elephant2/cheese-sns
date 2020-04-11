import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'env/environment';
import { BookmarkComponent } from './bookmark.component';

@NgModule({
  declarations: [BookmarkComponent],
  imports: [
    CommonModule
  ],
  providers: [
    environment.bookmarkService
  ]
})
export class BookmarkModule { }
