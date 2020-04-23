import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Photo, PhotoService } from 'shared/service/photo';
import { Pageable, Page } from 'shared/model';
import { LoadingService } from 'shared/service/loading';

/**
 * ハッシュタグ
 */
@Component({
  selector: 'app-hashtag',
  templateUrl: './hashtag.component.html',
  styleUrls: ['./hashtag.component.scss']
})
export class HashtagComponent implements OnInit {

  /** 検索ワード */
  tag: string;

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
    private route: ActivatedRoute,
    private router: Router,
    private photoService: PhotoService,
    private loadingService: LoadingService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: { tag: string }) => {
      const tag = params.tag;

      if (!tag) {
        // TOPへ
        return this.router.navigate(['/']);
      }

      // キーワード
      this.tag = tag;

      this.loadingService.setLoading(true);
      this.getPhotoList();
    });
  }

  getPhotoList() {
    // 写真を取得
    this.photoService.getPhotoListByTag(this.tag, this.pageable).subscribe(photoData => {
      this.loadingService.setLoading(false);

      this.photoData = photoData;
      this.photoList = this.photoList.concat(photoData.content);

      if (!photoData.last) {
        // もっと見るリンク
        setTimeout(() => {
          if (typeof IntersectionObserver !== 'undefined') {
            const io = new IntersectionObserver(entries => {
              entries.forEach(entry => {
                if (!entry.isIntersecting) {
                  return;
                }
                // 次のページへ
                this.next();
                io.unobserve(entry.target);
              });
            }, {
                rootMargin: '200px 0px'
              });
            io.observe(this.nextLink.nativeElement);
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
