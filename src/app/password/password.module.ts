import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { environment } from 'env/environment';
import { PasswordRoutingModule } from './password-routing.module';
import { PasswordComponent } from './password.component';
import { PasswordReminderComponent } from './password-reminder/password-reminder.component';
import { PasswordReminderCbkComponent } from './password-reminder-cbk/password-reminder-cbk.component';
// import { ThemeColorModule } from 'shared/directive/theme-color';

@NgModule({
  declarations: [
    PasswordComponent,
    PasswordReminderComponent,
    PasswordReminderCbkComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PasswordRoutingModule,
    // ThemeColorModule
  ],
  exports: [
    PasswordComponent
  ],
  providers: [
    environment.passwordService
  ]
})
export class PasswordModule { }
