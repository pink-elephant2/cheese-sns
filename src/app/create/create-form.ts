import { Validators } from '@angular/forms';

/**
 * 写真投稿
 * 入力フォーム
 */
export class CreateForm {

  /** 画像ファイル */
  upfile: string;

  /** キャプション */
  caption: string;

  /** タグ */
  tags: string[];

  /** 緯度 */
  lat: number;

  /** 経度 */
  lng: number;

  /** 住所 */
  address: string;

  static validators = {
    /** 画像ファイル */
    upfile: ['', Validators.compose([Validators.required])],
    /** キャプション */
    caption: ['', Validators.compose([Validators.required, Validators.maxLength(1000)])],
    /** タグ */
    // tags: ['', Validators.compose([])]
    /** 緯度 */
    lat: ['', Validators.compose([])],
    /** 経度 */
    lng: ['', Validators.compose([])],
    /** 住所 */
    address: ['', Validators.compose([Validators.maxLength(50)])]
  };

}
