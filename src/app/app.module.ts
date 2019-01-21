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
import { PrivacyModule } from './privacy/privacy.module';
import { TermsModule } from './terms/terms.module';
import { HeaderModule } from './shared/component/header/header.module';
import { FooterModule } from './shared/component/footer/footer.module';

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
    PrivacyModule,
    TermsModule,
    HeaderModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
