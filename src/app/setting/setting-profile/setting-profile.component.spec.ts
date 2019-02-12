import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingProfileComponent } from './setting-profile.component';

describe('SettingProfileComponent', () => {
  let component: SettingProfileComponent;
  let fixture: ComponentFixture<SettingProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
