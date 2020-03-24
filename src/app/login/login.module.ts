import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { environment } from 'env/environment';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { LoginComponent } from './login.component';
import { NavigateService } from 'shared/service/navigate';
import { ThemeColorModule } from 'shared/directive/theme-color';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ThemeColorModule
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent],
  providers: [
    environment.authService,
    NavigateService
  ]
})
export class LoginModule { }
