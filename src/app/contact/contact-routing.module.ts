import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact.component';

const routes: Routes = [
  {
    path: '', component: ContactComponent, data: { title: 'お問合せ' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ContactRoutingModule { }
