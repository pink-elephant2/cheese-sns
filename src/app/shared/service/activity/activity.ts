import { Photo } from '../photo';
import { Account } from '../account';
import { ActivityType } from './activity-type.enum';

/**
 * アクティビティ
 */
export class Activity {

  // ----------------------------------
  // API返却値
  // ----------------------------------

  /** 行動種別 */
  public activityType: ActivityType;

  /** 写真 */
  public photo: Photo;

  /** 日時 */
  public createdAt: Date;

  /** ユーザー */
  public account: Account;
}
