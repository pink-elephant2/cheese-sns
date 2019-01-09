import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AccountComponent],
  exports: [AccountComponent]
})
export class AccountModule { }
