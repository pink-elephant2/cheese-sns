import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { AppRoutingModule } from '../../../app-routing.module';
import { environment } from 'env/environment';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  providers: [
    environment.authService,
    environment.accountService
  ]
})
export class HeaderModule { }
