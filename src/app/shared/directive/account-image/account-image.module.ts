import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountImageDirective } from './account-image.directive';

@NgModule({
  declarations: [
    AccountImageDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AccountImageDirective
  ]
})
export class AccountImageModule { }
