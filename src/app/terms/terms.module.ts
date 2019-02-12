import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermsComponent } from './terms.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TermsComponent],
  exports: [TermsComponent]
})
export class TermsModule { }
