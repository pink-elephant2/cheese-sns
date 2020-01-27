import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { filter } from 'rxjs/operators';
import { GaService } from 'shared/service/ga';
import { APP_TITLE } from 'shared/const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  /** 無限スクロールする画面か */
  isInfinityScroll: boolean;

  constructor(
    private router: Router,
    private titleService: Title,
    private gaService: GaService,
    private swUpdate: SwUpdate
  ) {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        // 強制更新
        window.location.reload();
      });
      // Check for new version
      this.swUpdate.checkForUpdate();
    }
  }

  ngOnInit() {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((params: any) => {
      window.scrollTo(0, 0);

      // タイトル設定
      const titles: Array<string> = this.getRouterData(this.router.routerState, this.router.routerState.root, 'title');
      const title = ((titles.length > 0) ? titles.pop() + ' - ' : '') + APP_TITLE;
      this.titleService.setTitle(title);

      // 無限スクロールする画面か判定
      const isInfinityScrolls = this.getRouterData(this.router.routerState, this.router.routerState.root, 'infinityScroll');
      this.isInfinityScroll = Boolean(isInfinityScrolls.length > 0 && isInfinityScrolls.pop());

      // tracking
      this.gaService.sendPageView(params.url);

      // ホーム画面へ追加イベント
      window.addEventListener('beforeinstallprompt', event => {
        event['userChoice'].then(choiceResult => {
          this.gaService.sendEvent('install', 'install', 'click', choiceResult.outcome);
        });
      });
    });
  }

  /**
   * Router設定値を取得する。
   * @param state 状態
   * @param parent 親
   */
  private getRouterData(state, parent, key: string): Array<string> {
    const data: Array<string> = [];
    if (parent && parent.snapshot.data && parent.snapshot.data[key]) {
      data.push(parent.snapshot.data[key]);
    }
    if (state && parent) {
      // 再帰
      data.push(... this.getRouterData(state, state.firstChild(parent), key));
    }
    return data;
  }
}
