import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { AccountService } from './account.service';
import { Account } from './account';
import { ProfileForm } from 'src/app/setting/setting-profile/profile-form';
import { SignupForm } from 'src/app/signup/signup-form';
import { ImageForm } from 'src/app/setting/setting-profile/image-form';

/**
 * アカウントサービス
 * モック
 */
@Injectable()
export class AccountMockService extends AccountService {

  public static accountList: Account[] = [{
    id: 1,
    loginId: 'my_melody',
    name: 'マイメロディ',
    description: 'おはよう♪　あさごはん　ちゃんとたべた〜？　いっしゅうかん　がんばろうね♪',
    imgUrl: 'assets/images/my_melody.png',
    twitter: 'Melody_Mariland',
  } as Account, {
    id: 2,
    loginId: 'ki_ri_mi',
    name: 'KIRIMIちゃん.',
    description: 'ラブ！サーモン！>°))))◁',
    imgUrl: 'assets/images/ki_ri_mi.png',
    twitter: 'kirimi_sanrio'
  } as Account, {
    id: 3,
    loginId: 'gudetama',
    name: 'ぐでたま',
    description: 'だるい',
    imgUrl: 'assets/images/gudetama.png',
    twitter: 'gudetama_sanrio'
  } as Account
  ];

  /**
   * アカウントを作成する
   */
  public createAccount(form: SignupForm): Observable<boolean> {
    return of(true);
  }

  /**
   * アカウントを取得する
   */
  public getAccount(loginId: string): Observable<Account> {
    if (!loginId) {
      loginId = 'my_melody';
    }
    return of(AccountMockService.accountList.find(account => account.loginId === loginId));
  }

  /**
   * プロフィールを更新する
   */
  public putProfile(loginId: string, form: ProfileForm): Observable<boolean> {
    return of(true);
  }

  /**
   * 画像を更新する
   */
  public putImage(loginId: string, form: ImageForm, file: File): Observable<boolean> {
    return of(true);
  }

  /**
   * 通報する
   */
  public report(loginId: string, reason: number): Observable<boolean> {
    return of(true);
  }

  /**
   * ブロックする
   */
  public block(loginId: string): Observable<boolean> {
    return of(true);
  }
}
