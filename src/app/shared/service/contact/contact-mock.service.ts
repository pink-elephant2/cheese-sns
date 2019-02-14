import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ContactService } from './contact.service';
import { ContactForm } from 'src/app/contact/contact-form';

/**
 * お問合せサービス
 * モック
 */
@Injectable()
export class ContactMockService extends ContactService {

  /**
   * お問合せ送信
   */
  public sendContact(form: ContactForm): Observable<boolean> {
    return of(true);
  }
}
