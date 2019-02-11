import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo, PhotoService } from 'shared/service/photo';
import { LoadingService } from 'shared/service/loading';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit, OnDestroy {

  photo: Photo;

  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService,
    private loadingService: LoadingService
  ) { }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      const photoId = params['photoId'];

      // 写真を取得
      this.loadingService.setLoading(true);
      this.photoService.getPhoto(photoId).subscribe(photo => {
        this.loadingService.setLoading(false);

        this.photo = photo;
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
