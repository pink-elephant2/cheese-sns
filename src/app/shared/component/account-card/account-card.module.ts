import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountCardComponent } from './account-card.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AccountImageModule } from 'shared/directive';
import { ThemeColorModule } from 'shared/directive/theme-color';
import { SafeHtmlModule } from 'shared/pipe';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    AccountImageModule,
    ThemeColorModule,
    SafeHtmlModule
  ],
  declarations: [AccountCardComponent],
  exports: [AccountCardComponent]
})
export class AccountCardModule { }
