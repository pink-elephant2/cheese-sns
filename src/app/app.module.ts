import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TopModule } from './top/top.module';
import { LoginModule } from './login/login.module';
import { AccountModule } from './account/account.module';
import { CreateModule } from './create/create.module';
import { ActivityModule } from './activity/activity.module';
import { PhotoModule } from './photo/photo.module';
import { PrivacyModule } from './privacy/privacy.module';
import { TermsModule } from './terms/terms.module';
import { HeaderModule, FooterModule } from './shared/component';
import { PastDateModule } from './shared/pipe';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    TopModule,
    LoginModule,
    AccountModule,
    CreateModule,
    ActivityModule,
    PhotoModule,
    PrivacyModule,
    TermsModule,
    HeaderModule,
    FooterModule,
    PastDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
