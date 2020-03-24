import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { environment } from 'env/environment';
import { SettingComponent } from './setting.component';
import { SettingRoutingModule } from './setting-routing.module';
import { SettingProfileComponent } from './setting-profile/setting-profile.component';
import { SettingDisplayComponent } from './setting-display/setting-display.component';
import { AccountImageModule } from 'shared/directive';
import { ThemeColorModule } from 'shared/directive/theme-color';

@NgModule({
  imports: [
    CommonModule,
    SettingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AccountImageModule,
    ThemeColorModule
  ],
  declarations: [
    SettingComponent,
    SettingProfileComponent,
    SettingDisplayComponent
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
