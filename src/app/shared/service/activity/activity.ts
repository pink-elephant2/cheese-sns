import { Photo } from '../photo';
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
  public createAt: Date;

  /** ユーザー */
  public account: Account;
}
