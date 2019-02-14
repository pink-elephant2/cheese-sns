import { Account } from 'shared/service/account';

/**
 * コメント
 */
export class Comment {

  /** ID */
  public id: number;

  /** コード */
  public cd: string;

  /** コメント */
  public comment: string;

  /** コメント日時 */
  public createAt: Date;

  /** コメントユーザー */
  public account: Account;

  /** 自分がいいねしたか */
  public isLike: boolean;
}
