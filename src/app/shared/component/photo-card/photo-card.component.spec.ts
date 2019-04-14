import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { PhotoCardComponent } from './photo-card.component';
import { PastDateModule } from 'shared/pipe';
import { ShareModalModule } from '../share-modal/share-modal.module';
import { AuthService, AuthMockService } from 'shared/service/auth';
import { PhotoService, PhotoMockService } from 'shared/service/photo';
import { LoadingService } from 'shared/service/loading';

describe('PhotoCardComponent', () => {
  let component: PhotoCardComponent;
  let fixture: ComponentFixture<PhotoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterTestingModule,
        PastDateModule,
        ShareModalModule
      ],
      declarations: [PhotoCardComponent],
      providers: [
        { provide: AuthService, useClass: AuthMockService },
        { provide: PhotoService, useClass: PhotoMockService },
        LoadingService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
