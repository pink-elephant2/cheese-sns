import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PasswordComponent } from './password.component';
import { PasswordReminderComponent } from './password-reminder/password-reminder.component';
import { PasswordReminderCbkComponent } from './password-reminder-cbk/password-reminder-cbk.component';


const routes: Routes = [
  {
    path: '', component: PasswordComponent,
    children: [
      { path: 'reminder', component: PasswordReminderComponent, data: { title: 'パスワードリマインダー' } },
      { path: 'reminder/cbk', component: PasswordReminderCbkComponent, data: { title: 'パスワードリマインダー' } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PasswordRoutingModule { }
