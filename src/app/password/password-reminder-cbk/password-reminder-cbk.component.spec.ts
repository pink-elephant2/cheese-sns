import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordReminderCbkComponent } from './password-reminder-cbk.component';

describe('PasswordReminderCbkComponent', () => {
  let component: PasswordReminderCbkComponent;
  let fixture: ComponentFixture<PasswordReminderCbkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordReminderCbkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordReminderCbkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
