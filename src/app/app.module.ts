import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from 'shared/service/auth';
import { TopModule } from './top/top.module';
import { LoginModule } from './login/login.module';
import { LogoutModule } from './logout/logout.module';
import { SignupModule } from './signup/signup.module';
import { AccountModule } from './account/account.module';
import { CreateModule } from './create/create.module';
import { ActivityModule } from './activity/activity.module';
import { PhotoModule } from './photo/photo.module';
import { PrivacyModule } from './privacy/privacy.module';
import { TermsModule } from './terms/terms.module';
import { ContactModule } from './contact/contact.module';
import { HeaderModule, FooterModule, LoadingModule, MyAdsenseModule } from './shared/component';
import { PastDateModule } from './shared/pipe';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TopModule,
    LoginModule,
    LogoutModule,
    SignupModule,
    AccountModule,
    CreateModule,
    ActivityModule,
    PhotoModule,
    PrivacyModule,
    TermsModule,
    ContactModule,
    HeaderModule,
    FooterModule,
    PastDateModule,
    LoadingModule,
    MyAdsenseModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
