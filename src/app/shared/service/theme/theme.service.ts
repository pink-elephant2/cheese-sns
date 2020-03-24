import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ColorPatternEnum } from './color-pattern.enum';

/**
 * テーマサービス
 */
@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  /** テーマリスト */
  public themeList = [
    // 青
    {
      bg: {
        base: [],
        main: ['blue', 'lighten-2'],
        mainHeadline: [],
        mainLink: [],
        accent: ['cyan', 'darken-3', 'waves-light'],
        accent2: ['cyan', 'lighten-2', 'waves-light'],
        accent3: ['green', 'lighten-2', 'waves-light']
      },
      text: {
        base: [],
        main: [],
        mainHeadline: ['light-blue-text', 'text-darken-4'],
        mainLink: ['deep-purple-text', 'text-darken-3'],
        accent: ['cyan-text', 'text-darken-3', 'waves-light']
      }
    },
    // オレンジ
    {
      bg: {
        base: [],
        main: ['orange', 'lighten-2'],
        mainHeadline: [],
        mainLink: [],
        accent: ['deep-purple', 'lighten-2', 'waves-light'],
        accent2: ['cyan', 'lighten-2', 'waves-light'],
        accent3: ['green', 'lighten-2', 'waves-light']
      },
      text: {
        base: [],
        main: [],
        mainHeadline: ['light-green-text', 'text-darken-1'],
        mainLink: ['cyan-text', 'text-darken-3'],
        accent: ['deep-purple-text', 'text-lighten-2', 'waves-light']
      }
    },
    // ピンク
    {
      bg: {
        base: [],
        main: ['pink', 'accent-1'],
        mainHeadline: [],
        mainLink: [],
        accent: ['pink', 'accent-1', 'waves-light'],
        accent2: ['cyan', 'lighten-2', 'waves-light'],
        accent3: ['green', 'lighten-2', 'waves-light']
      },
      text: {
        base: [],
        main: [],
        mainHeadline: ['brown-text'],
        mainLink: ['green-text'],
        accent: ['pink-text', 'text-lighten-2', 'waves-light']
      }
    },
    // TODO 紫
    {
      bg: {
        base: [],
        main: ['purple'],
        mainHeadline: [],
        mainLink: [],
        accent: ['purple', 'waves-light'],
        accent2: ['cyan', 'lighten-2', 'waves-light'],
        accent3: ['green', 'lighten-2', 'waves-light']
      },
      text: {
        base: [],
        main: [],
        mainHeadline: ['purple-text'],
        mainLink: ['purple-text'],
        accent: ['purple-text', 'waves-light']
      }
    },
    // 赤
    {
      bg: {
        base: [],
        main: ['red', 'accent-2'],
        mainHeadline: [],
        mainLink: [],
        accent: ['teal', 'accent-4', 'waves-light'],
        accent2: ['orange', 'waves-light'],
        accent3: ['pink', 'accent-1', 'waves-light']
      },
      text: {
        base: [],
        main: [],
        mainHeadline: ['teal-text', 'text-accent-4'],
        mainLink: ['blue-text', 'text-darken-1'],
        accent: ['teal-text', 'waves-light']
      }
    },
    // TODO 緑
    {
      bg: {
        base: [],
        main: ['green'],
        mainHeadline: [],
        mainLink: [],
        accent: ['green', 'waves-light'],
        accent2: ['cyan', 'lighten-2', 'waves-light'],
        accent3: ['green', 'lighten-2', 'waves-light']
      },
      text: {
        base: [],
        main: [],
        mainHeadline: ['green-text'],
        mainLink: ['green-text'],
        accent: ['green-text', 'waves-light']
      }
    }
  ];

  /** 選択中のテーマ番号 */
  public myThemeNo: number = 0;

  /** テーマ番号変更検知 */
  public myThemeNoChanges = new BehaviorSubject<boolean>(null);

  constructor() {
    this.myThemeNo = Number(localStorage.getItem('myThemeNo')) || 0;
  }

  /**
   * テーマを選択する
   */
  public setTheme(themeNo: number) {
    // TODO DB保存
    this.myThemeNo = themeNo;
    localStorage.setItem('myThemeNo', `${themeNo}`);

    // 呼び出し元に検知させる
    this.myThemeNoChanges.next(true);
  }

  /**
   * 背景色を取得する
   */
  public getBgColors(pattern?: ColorPatternEnum): string[] {
    let classList: string[] = [];

    switch (pattern) {
      // ベースカラー
      case ColorPatternEnum.Base:
        classList = this.themeList[this.myThemeNo].bg.base;
        break;

      // メインカラー
      case ColorPatternEnum.Main:
        classList = this.themeList[this.myThemeNo].bg.main;
        break;

      // メインカラー 見出し
      case ColorPatternEnum.MainHeadline:
        classList = this.themeList[this.myThemeNo].bg.mainHeadline;
        break;

      // メインカラー リンク
      case ColorPatternEnum.MainLink:
        classList = this.themeList[this.myThemeNo].bg.mainLink;
        break;

      // アクセントカラー1
      case ColorPatternEnum.Accent:
        classList = this.themeList[this.myThemeNo].bg.accent;
        break;

      // アクセントカラー2
      case ColorPatternEnum.Accent2:
        classList = this.themeList[this.myThemeNo].bg.accent2;
        break;

      // アクセントカラー3
      case ColorPatternEnum.Accent3:
        classList = this.themeList[this.myThemeNo].bg.accent3;
        break;

      default:
        break;
    }
    return classList;
  }

  /**
   * テキスト色を取得する
   */
  public getTextColors(pattern?: ColorPatternEnum): string[] {
    let classList: string[] = [];

    switch (pattern) {
      // ベースカラー
      case ColorPatternEnum.Base:
        classList = this.themeList[this.myThemeNo].text.base;
        break;

      // メインカラー
      case ColorPatternEnum.Main:
        classList = this.themeList[this.myThemeNo].text.main;
        break;

      // メインカラー 見出し
      case ColorPatternEnum.MainHeadline:
        classList = this.themeList[this.myThemeNo].text.mainHeadline;
        break;

      // メインカラー リンク
      case ColorPatternEnum.MainLink:
        classList = this.themeList[this.myThemeNo].text.mainLink;
        break;

      // アクセントカラー
      case ColorPatternEnum.Accent:
        classList = this.themeList[this.myThemeNo].text.accent;
        break;

      default:
        break;
    }
    return classList;
  }
}
