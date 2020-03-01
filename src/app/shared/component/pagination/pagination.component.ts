import { Component, Input, Output, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
import { Page } from 'shared/model';

/**
 * ページネーション
 */
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnChanges {

  /** ページ情報 */
  @Input() pageData: Page<any>;

  /** ページネーション */
  pagination: number[] = [];

  /** 次のページへ */
  @Output() onNext: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.pageData) {
      // ページネーション設定
      const backSpan = Math.floor((this.pageData.totalPages - 1) / 2);
      const forthSpan = (this.pageData.totalPages - 1) - backSpan;
      let startIndex: number;
      let endIndex: number;
      const length = 5;

      if (this.pageData.number - backSpan < 1) {
        // 表示幅に従うと存在しないページ(0ページ以下)が生成されるので、1ページから始める
        startIndex = 1;
        endIndex = length < this.pageData.totalPages ? length : this.pageData.totalPages;
      } else if (this.pageData.number + forthSpan > this.pageData.totalPages) {
        // 表示幅に従うと存在しないページ(最終ページ以降)が生成されるので、表示領域を最終ページから逆算する
        startIndex = this.pageData.totalPages - (length - 1) > 1 ? this.pageData.totalPages - (length - 1) : 1;
        endIndex = this.pageData.totalPages;
      } else {
        // その間なので、中央にcurrentがくるように配置する。
        // ページのリストの端に当たっていないので、単純に中央にくるような両端を考えればよい。
        startIndex = this.pageData.number - backSpan;
        endIndex = this.pageData.number + forthSpan;
      }
      this.pagination = new Array(endIndex - startIndex + 1).fill(0).map((v, i) => i + startIndex);
    }
  }

  /**
   * 別のページへ
   */
  next(page: number) {
    if (page !== undefined && this.pageData && (page < 0 || this.pageData.totalPages <= page)) {
      return;
    }
    this.onNext.emit(page);
  }
}
