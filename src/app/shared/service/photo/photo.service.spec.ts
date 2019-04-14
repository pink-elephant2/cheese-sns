import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { PhotoService } from './photo.service';

describe('PhotoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [PhotoService]
    });
  });

  it('should be created', inject([PhotoService], (service: PhotoService) => {
    expect(service).toBeTruthy();
  }));
});
