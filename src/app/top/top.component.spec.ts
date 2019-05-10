import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { TopComponent } from './top.component';
import { PhotoCardModule, MyAdsenseModule } from 'shared/component';
import { PhotoService, PhotoMockService } from 'shared/service/photo';
import { LoadingService } from 'shared/service/loading';

describe('TopComponent', () => {
  let component: TopComponent;
  let fixture: ComponentFixture<TopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule,
        PhotoCardModule,
        MyAdsenseModule
      ],
      declarations: [TopComponent],
      providers: [
        { provide: PhotoService, useClass: PhotoMockService },
        LoadingService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
