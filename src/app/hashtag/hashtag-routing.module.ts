import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HashtagComponent } from './hashtag.component';

const routes: Routes = [
  {
    path: ':tag', component: HashtagComponent, data: { title: 'ハッシュタグ検索' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class HashtagRoutingModule { }
