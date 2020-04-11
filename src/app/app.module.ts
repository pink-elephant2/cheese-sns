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
import { SearchModule } from './search/search.module';
import { HashtagModule } from './hashtag/hashtag.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { HeaderModule, FooterModule, LoadingModule, TwitterModule, MyAdsenseModule } from './shared/component';
import { PastDateModule } from './shared/pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ThemeColorModule } from 'shared/directive/theme-color';

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
    SearchModule,
    HashtagModule,
    BookmarkModule,
    HeaderModule,
    FooterModule,
    PastDateModule,
    LoadingModule,
    TwitterModule,
    MyAdsenseModule,
    ThemeColorModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
