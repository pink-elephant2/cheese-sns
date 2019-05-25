/**
 * アカウント
 */
export class Account {

  // ----------------------------------
  // API返却値
  // ----------------------------------

  /** アカウントID */
  id: number;
  /** ログインID */
  loginId: string;
  /** アカウント名 */
  name: string;
  /** 自己紹介 */
  description: string;
  /** 画像パス */
  imgUrl: string;
  /** 場所 */
  place: string;
  /** ウェブサイト */
  url: string;

  /** Twitterアカウント */
  twitter: string;
  /** Instagramアカウント */
  instagram: string;

  /** ログイン状態の場合、フォローしているかどうか */
  isFollow: boolean;
  /** ログイン状態の場合、フォローされているかどうか */
  isFollower: boolean;
  /** ログイン状態の場合、ブロックされているかどうか */
  isBlocked: boolean;
}
