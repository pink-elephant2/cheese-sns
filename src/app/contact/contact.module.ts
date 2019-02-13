import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContactComponent } from './contact.component';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ContactComponent
  ]
})
export class ContactModule { }
