import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermsComponent } from './terms.component';
import { TermsRoutingModule } from './terms-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TermsRoutingModule
  ],
  declarations: [TermsComponent],
  exports: [TermsComponent]
})
export class TermsModule { }
