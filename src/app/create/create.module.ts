import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'env/environment';
import { CreateComponent } from './create.component';
import { ThemeColorModule } from 'shared/directive/theme-color';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ThemeColorModule
  ],
  declarations: [CreateComponent],
  exports: [CreateComponent],
  providers: [
    environment.photoService,
    environment.authService
  ]
})
export class CreateModule { }
