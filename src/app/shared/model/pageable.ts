/**
 * ページ(リクエスト)
 */
export class Pageable {

  /** ページ(0始まり) */
  page: number;

  /** 表示件数 */
  size: number;

  /** ソート順 */
  sort?: string;
}
