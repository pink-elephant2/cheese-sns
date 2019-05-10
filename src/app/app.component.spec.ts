import { TestBed, async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderModule, FooterModule, LoadingModule, MyAdsenseModule } from 'shared/component';
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
import { PastDateModule } from 'shared/pipe';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule,
        HeaderModule,
        FooterModule,
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
        PastDateModule,
        LoadingModule,
        MyAdsenseModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // TODO
  // it(`should have as title 'cheese-sns'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('cheese-sns');
  // });

  // TODO
  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to cheese-sns!');
  // });
});
