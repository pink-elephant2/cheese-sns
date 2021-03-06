import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta } from '@angular/platform-browser';

import { Photo, PhotoService } from 'shared/service/photo';
import { Pageable, Page } from 'shared/model';
import { LoadingService } from 'shared/service/loading';

/**
 * 検索
 */
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  /** 検索ワード */
  keyword: string;

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
    private meta: Meta,
    private photoService: PhotoService,
    private loadingService: LoadingService
  ) { }

  ngOnInit() {
    this.meta.addTag({ name: 'robots', content: 'noindex' });

    this.route.queryParams.subscribe((params: { q: string }) => {
      const keyword = params.q;

      if (!keyword) {
        // TOPへ
        return this.router.navigate(['/']);
      }

      // キーワードを渡す
      this.keyword = keyword;

      this.loadingService.setLoading(true);
      this.getPhotoList();
    });
  }

  ngOnDestroy(): void {
    this.meta.removeTag('name=robots');
  }

  getPhotoList() {
    // 写真を検索
    this.photoService.getPhotoListByKeyword(this.keyword, this.pageable).subscribe(photoData => {
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
