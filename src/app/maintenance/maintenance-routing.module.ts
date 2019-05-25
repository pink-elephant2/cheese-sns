import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintenanceComponent } from './maintenance.component';

const routes: Routes = [
  {
    path: '', component: MaintenanceComponent, data: { title: 'メンテナンス中' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class MaintenanceRoutingModule { }
