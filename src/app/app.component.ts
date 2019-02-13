import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { GaService } from 'shared/service/ga';
import { APP_TITLE } from 'shared/const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router,
    private titleService: Title,
    private gaService: GaService
  ) { }

  ngOnInit() {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((params: any) => {
      window.scrollTo(0, 0);

      // タイトル設定
      const titles: Array<string> = this.getTitle(this.router.routerState, this.router.routerState.root);
      const title = ((titles.length > 0) ? titles.pop() + ' - ' : '') + APP_TITLE;
      this.titleService.setTitle(title);

      // tracking
      this.gaService.sendPageView(params.url);
    });
  }

  /**
   * Routerタイトルを取得する。
   * @param state 状態
   * @param parent 親
   */
  private getTitle(state, parent): Array<string> {
    const data: Array<string> = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }
    if (state && parent) {
      // 再帰
      data.push(... this.getTitle(state, state.firstChild(parent)));
    }
    return data;
  }
}
