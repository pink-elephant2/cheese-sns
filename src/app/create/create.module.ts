import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CreateComponent],
  exports: [CreateComponent]
})
export class CreateModule { }
