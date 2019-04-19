import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { environment } from 'env/environment';
import { SettingComponent } from './setting.component';
import { SettingRoutingModule } from './setting-routing.module';
import { SettingProfileComponent } from './setting-profile/setting-profile.component';
import { AccountImageModule } from 'shared/directive';

@NgModule({
  imports: [
    CommonModule,
    SettingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AccountImageModule
  ],
  declarations: [
    SettingComponent,
    SettingProfileComponent
  ],
  exports: [
    SettingComponent,
    SettingProfileComponent
  ],
  providers: [
    environment.accountService
  ]
})
export class SettingModule { }
