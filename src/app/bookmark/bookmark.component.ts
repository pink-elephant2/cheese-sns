import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Page, Pageable } from 'shared/model';
import { Photo, PhotoService } from 'shared/service/photo';
import { LoadingService } from 'shared/service/loading';

/**
 * ブックマーク
 */
@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent implements OnInit {

  /** 写真リスト */
  photoList: Photo[] = [];
  photoData: Page<Photo>;

  /** ページ情報 */
  pageable = {
    page: 0,
    size: 20
  } as Pageable;

  /** もっと見るリンク */
  @ViewChild('nextLink', { static: false }) nextLink: ElementRef;

  constructor(
    private photoService: PhotoService,
    private loadingService: LoadingService
  ) { }

  ngOnInit() {
    this.loadingService.setLoading(true);
    this.getPhotoList();
  }

  getPhotoList() {
    // 写真を取得
    this.photoService.getPhotoList(null, this.pageable).subscribe(photoData => {
      this.loadingService.setLoading(false);

      this.photoData = photoData;
      this.photoList = this.photoList.concat(photoData.content);

      if (!photoData.last) {
        // もっと見るリンク
        setTimeout(() => {
          if (typeof IntersectionObserver !== 'undefined') {
            const io = new IntersectionObserver(entries => {
              entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                // 次のページへ
                this.next();
                io.unobserve(entry.target)
              })
            }, {
                rootMargin: '200px 0px'
              })
            io.observe(this.nextLink.nativeElement)
          } else {
            // なし
          }
        }, 0);
      }
    }, () => {
      this.loadingService.setLoading(false);
    });
  }

  /** 次のページを取得 */
  next() {
    this.pageable.page++;
    this.getPhotoList();
  }
}
