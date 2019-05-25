import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { environment } from 'env/environment';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ContactRoutingModule
  ],
  exports: [
    ContactComponent
  ],
  providers: [
    environment.contactService
  ]
})
export class ContactModule { }
