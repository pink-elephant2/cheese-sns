import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingComponent } from './setting.component';
import { SettingRoutingModule } from './setting-routing.module';
import { SettingProfileComponent } from './setting-profile/setting-profile.component';

@NgModule({
  imports: [
    CommonModule,
    SettingRoutingModule
  ],
  declarations: [
    SettingComponent,
    SettingProfileComponent
  ],
  exports: [
    SettingComponent,
    SettingProfileComponent
  ]
})
export class SettingModule { }
