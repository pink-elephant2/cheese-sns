import { Account } from 'shared/service/account';
import { Comment } from './comment';

/**
 * 写真
 */
export class Photo {

  /** ID */
  public id: number;

  /** コード */
  public cd: string;

  /** 説明 */
  public caption: string;

  /** 画像パス */ // TODO 画像情報クラス
  public imgUrl: string;

  /** 投稿日時 */
  public createAt: Date;

  /** 投稿ユーザー */
  public account: Account;

  /** コメント */
  public comments: Comment[];
}
