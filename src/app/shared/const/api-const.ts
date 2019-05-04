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
    /** 認証が必要なAPI */
    USER: '/api/v1/user',
    /** アカウント */
    ACCOUNT: '/api/v1/account',
    /** アカウント.プロフィール */
    ACCOUNT_PROFILE: 'account/profile',
    /** アカウント.画像 */
    ACCOUNT_IMAGE: 'account/image',
    /** アカウント.フォロー */
    ACCOUNT_FOLLOW: 'account/follow',
    /** アカウント.フォロー解除 */
    ACCOUNT_UNFOLLOW: 'account/unfollow',
    /** アクティビティ.フォロー中 */
    ACTIVITY_FOLLOWING: '/api/v1/activity/following',
    /** アクティビティ.自分 */
    ACTIVITY_ME: '/api/v1/activity/me',
    /** 写真 */
    PHOTO: '/api/v1/photo',
    /** 写真.投稿 */
    PHOTO_CREATE: 'photo',
    /** 写真.いいね */
    PHOTO_LIKE: 'like',
    /** 写真.いいね解除 */
    PHOTO_DISLIKE: 'dislike',
    /** 写真.コメント */
    PHOTO_COMMENT: 'comment',
    /** お問合せ */
    CONTACT: '/api/v1/contact',
  };
}
