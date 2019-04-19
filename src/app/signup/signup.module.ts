import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { environment } from 'env/environment';
import { AppRoutingModule } from '../app-routing.module';
import { SignupComponent } from './signup.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [SignupComponent],
  exports: [SignupComponent],
  providers: [
    environment.accountService
  ]
})
export class SignupModule { }
