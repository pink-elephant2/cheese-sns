import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountFollowingComponent } from './account-following.component';

describe('AccountFollowingComponent', () => {
  let component: AccountFollowingComponent;
  let fixture: ComponentFixture<AccountFollowingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountFollowingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountFollowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
