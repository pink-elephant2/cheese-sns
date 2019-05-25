import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TermsComponent } from './terms.component';

const routes: Routes = [
  {
    path: '', component: TermsComponent, data: { title: '利用規約' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class TermsRoutingModule { }
