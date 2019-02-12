import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'env/environment.prod';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { LogoutComponent } from './logout.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [LogoutComponent],
  exports: [LogoutComponent],
  providers: [
    environment.authService
  ]
})
export class LogoutModule { }
