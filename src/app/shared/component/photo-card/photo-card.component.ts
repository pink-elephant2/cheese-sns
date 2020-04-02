import { Component, OnInit, Input, ViewChild, ElementRef, OnDestroy, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { Photo, PhotoService, Comment } from 'shared/service/photo';
import { CommentForm } from './comment-form';
import { AuthService } from 'shared/service/auth';
import { LoadingService } from 'shared/service/loading';
import { NavigateService } from 'shared/service/navigate';
import videojs from "video.js";

/**
 * 写真カード
 */
@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss']
})
export class PhotoCardComponent implements OnInit, OnDestroy, AfterViewInit {

  /** 写真情報 */
  @Input() photo: Photo;

  /** コメント入力フォームを表示するか */
  @Input() hasInputComment = false;

  @ViewChild('videoPlayer', { static: false }) videoPlayer: ElementRef;
  player: any;

  /** 入力フォーム */
  form: FormGroup;

  /** ログイン状態か */
  authenticated = false;

  /** 動画再生中か(AutoPlay) TODO 読み込み完了してからtrueにする */
  isStarted = true;

  /** ドメインが異なる場合、m3u8が再生できない */
  isCrossOrigin = window.location.hostname !== 'torochee.com';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private photoService: PhotoService,
    private authService: AuthService,
    private loadingService: LoadingService,
    private navigateService: NavigateService
  ) {
    this.form = this.formBuilder.group(CommentForm.validators);
  }

  ngOnInit() {
    // ログイン前に行う予定だった処理を実行する
    if (this.hasInputComment && this.navigateService.getAfterLoginUrl() === ('/photo/' + this.photo.cd)
      && this.navigateService.getAfterLoginCallback() !== undefined) {
      this[this.navigateService.getAfterLoginCallback()]();
      this.navigateService.clearAfterLogin();
    }
    this.authenticated = this.authService.authenticated;
  }

  ngAfterViewInit(): void {
    if (!this.videoPlayer) {
      return;
    }

    this.player = videojs(this.videoPlayer.nativeElement, {
      html5: {
        hls: {
          withCredentials: true
        }
      },
      flash: {
        hls: {
          withCredentials: true
        }
      },
      fluid: true
    });
  }

  ngOnDestroy(): void {
    if (this.player) {
      this.player.dispose();
    }
  }

  /**
   * 動画再生/停止
   */
  public toggleVideo(): void {
    // TODO
    // if (!this.canplay) {
    //   return;
    // }
    if (this.isStarted) {
      this.pause();
    } else {
      this.play();
    }
  }

  /** 動画再生 */
  public play(): void {
    this.videoPlayer.nativeElement.play();
    this.isStarted = true;
  }

  /** 動画停止 */
  public pause(): void {
    this.videoPlayer.nativeElement.pause();
    this.isStarted = false;
  }

  /**
   * いいね
   */
  public like(): void {
    // 未ログイン処理
    if (!this.authService.authenticated) {
      // ログイン後に行う処理を設定
      this.navigateService.setAfterLogin('/photo/' + this.photo.cd, 'like');
      this.router.navigate(['/login']);
      return;
    }

    // いいねをする
    const sub = (!this.photo.isLike)
      ? this.photoService.likePhoto(this.authService.loginId, this.photo.cd)
      : this.photoService.dislikePhoto(this.authService.loginId, this.photo.cd);
    sub.subscribe((ret: boolean) => {
      this.photo.isLike = !this.photo.isLike;

      // いいね件数
      this.photo.likeCount += this.photo.isLike ? 1 : -1;
    });
  }

  /**
   * コメントにフォーカスする
   */
  public focusComment(): void {
    // 未ログイン処理
    if (!this.authService.authenticated) {
      // ログイン後に行う処理を設定
      this.navigateService.setAfterLogin('/photo/' + this.photo.cd, 'focusComment');
      this.router.navigate(['/login']);
      return;
    }

    const comment = document.getElementById('content');
    if (comment !== null) {
      comment.focus();
    }
  }

  /**
   * コメントする
   */
  public onSubmit(form: CommentForm, isValid: boolean): void {
    if (!isValid) {
      return;
    }

    // 未ログイン処理
    if (!this.authService.authenticated) {
      // ログイン後に行う処理を設定
      this.navigateService.setAfterLogin('/photo/' + this.photo.cd, 'onSubmit');
      this.router.navigate(['/login']);
      return;
    }

    // コメントする
    this.loadingService.setLoading(true);
    this.photoService.comment(this.authService.loginId, this.photo.cd, form.content).subscribe((comment: Comment) => {
      this.loadingService.setLoading(false);

      // コメントに1行追加
      if (this.photo.comments === undefined || this.photo.comments === null) {
        this.photo.comments = [];
      }
      this.photo.comments.push(comment);
    });
  }

  /**
   * コメントいいね
   */
  public likeComment(index: number): void {
    // 未ログイン処理
    if (!this.authService.authenticated) {
      // ログイン後に行う処理を設定
      this.navigateService.setAfterLogin('/photo/' + this.photo.cd, 'likeComment');
      this.router.navigate(['/login']);
      return;
    }

    if (index === undefined) {
      return;
    }

    // いいねをする
    const sub = (!this.photo.comments[index].isLike)
      ? this.photoService.likeComment(this.authService.loginId, this.photo.cd, this.photo.comments[index].cd)
      : this.photoService.dislikeComment(this.authService.loginId, this.photo.cd, this.photo.comments[index].cd);

    sub.subscribe((ret: boolean) => {
      this.photo.comments[index].isLike = !this.photo.comments[index].isLike;
    });
  }
}
