import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'env/environment';
import { CreateComponent } from './create.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [CreateComponent],
  exports: [CreateComponent],
  providers: [
    environment.PhotoService
  ]
})
export class CreateModule { }
