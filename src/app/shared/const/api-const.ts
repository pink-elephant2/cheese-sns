/**
 * API定数
 */
export class ApiConst {
  /** エンドポイント */
  public static readonly PATH = {
    /** ログイン */
    LOGIN: '/api/v1/login',
    /** ログアウト */
    LOGOUT: '/api/v1/logout',
    /** アカウント */
    ACCOUNT: '/api/v1/account',
    /** アカウント.プロフィール */
    ACCOUNT_PROFILE: '/api/v1/account/profile',
    /** アカウント.画像 */
    ACCOUNT_IMAGE: '/api/v1/account/image',
    /** アクティビティ.フォロー中 */
    ACTIVITY_FOLLOWING: '/api/v1/activity/following',
    /** アクティビティ.自分 */
    ACTIVITY_ME: '/api/v1/activity/me',
    /** 写真 */
    PHOTO: '/api/v1/photo',
    /** お問合せ */
    CONTACT: '/api/v1/contact',
  };
}
