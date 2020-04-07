import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountCardComponent } from './account-card.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AccountImageModule } from 'shared/directive';
import { SafeHtmlModule } from 'shared/pipe';
import { TagLinkModule } from '../tag-link';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    AccountImageModule,
    SafeHtmlModule,
    TagLinkModule
  ],
  declarations: [AccountCardComponent],
  exports: [AccountCardComponent]
})
export class AccountCardModule { }
