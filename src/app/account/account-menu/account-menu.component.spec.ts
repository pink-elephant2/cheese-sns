import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { AccountMenuComponent } from './account-menu.component';
import { AccountService, AccountMockService } from 'shared/service/account';
import { AuthService, AuthMockService } from 'shared/service/auth';
import { LoadingService } from 'shared/service/loading';
import { NavigateService } from 'shared/service/navigate';

describe('AccountMenuComponent', () => {
  let component: AccountMenuComponent;
  let fixture: ComponentFixture<AccountMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      declarations: [AccountMenuComponent],
      providers: [
        { provide: AccountService, useClass: AccountMockService },
        { provide: AuthService, useClass: AuthMockService },
        LoadingService,
        NavigateService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
