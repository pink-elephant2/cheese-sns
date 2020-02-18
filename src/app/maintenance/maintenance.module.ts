import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintenanceComponent } from './maintenance.component';
import { MaintenanceRoutingModule } from './maintenance-routing.module';
import { TwitterModule } from 'shared/component/twitter';

@NgModule({
  declarations: [MaintenanceComponent],
  imports: [
    CommonModule,
    MaintenanceRoutingModule,
    TwitterModule
  ]
})
export class MaintenanceModule { }
