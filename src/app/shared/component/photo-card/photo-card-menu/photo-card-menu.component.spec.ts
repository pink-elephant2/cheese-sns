import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { PhotoCardMenuComponent } from './photo-card-menu.component';
import { AuthService, AuthMockService } from 'shared/service/auth';
import { PhotoService, PhotoMockService } from 'shared/service/photo';
import { LoadingService } from 'shared/service/loading';

describe('PhotoCardMenuComponent', () => {
  let component: PhotoCardMenuComponent;
  let fixture: ComponentFixture<PhotoCardMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterTestingModule
      ],
      declarations: [PhotoCardMenuComponent],
      providers: [
        { provide: AuthService, useClass: AuthMockService },
        { provide: PhotoService, useClass: PhotoMockService },
        LoadingService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoCardMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
