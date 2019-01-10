import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TopModule } from './top/top.module';
import { LoginModule } from './login/login.module';
import { AccountModule } from './account/account.module';
import { HeaderModule } from './shared/component/header/header.module';
import { FooterModule } from './shared/component/footer/footer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TopModule,
    LoginModule,
    AccountModule,
    HeaderModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
