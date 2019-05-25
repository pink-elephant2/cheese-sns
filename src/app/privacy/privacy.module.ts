import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivacyComponent } from './privacy.component';
import { PrivacyRoutingModule } from './privacy-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PrivacyRoutingModule
  ],
  declarations: [PrivacyComponent],
  exports: [PrivacyComponent]
})
export class PrivacyModule { }
