import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { AppRoutingModule } from '../../../app-routing.module';
import { environment } from 'env/environment';
import { AccountImageModule } from 'shared/directive/account-image';
import { ThemeColorModule } from 'shared/directive/theme-color';
import { SafeHtmlModule } from 'shared/pipe';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    AccountImageModule,
    ThemeColorModule,
    SafeHtmlModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  providers: [
    environment.authService,
    environment.accountService,
    environment.photoService
  ]
})
export class HeaderModule { }
