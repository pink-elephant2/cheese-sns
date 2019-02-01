import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo, PhotoService } from 'shared/service/photo';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  photo: Photo;

  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService
  ) { }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      const photoId = params['photoId'];

      // 写真を取得
      this.photoService.getPhoto(photoId).subscribe(photo => {
        this.photo = photo;
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
