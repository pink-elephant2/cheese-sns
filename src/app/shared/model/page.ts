import { Sort } from './sort';

/**
 * ページ(レスポンス)
 */
export class Page<T> {

  /** データ */
  content: Array<T>;

  /** 総件数 */
  totalElements: number;

  /** 総ページ数 */
  totalPages: number;

  /** 表示件数 */
  size: number;

  /** 現在のページ */
  number: number;

  /** ソート順 */
  sort?: Sort;

  /** データ件数 */
  numberOfElements: number;

  /** 最初ページフラグ */
  first: boolean;

  /** 最後ページフラグ */
  last: boolean;
}
