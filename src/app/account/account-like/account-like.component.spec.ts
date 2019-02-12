import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountLikeComponent } from './account-like.component';

describe('AccountLikeComponent', () => {
  let component: AccountLikeComponent;
  let fixture: ComponentFixture<AccountLikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountLikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
