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
  public content: string;

  /** コメント日時 */
  public createdAt: Date;

  /** コメントユーザー */
  public account: Account;

  /** 自分がいいねしたか */
  public isLike: boolean;
}
