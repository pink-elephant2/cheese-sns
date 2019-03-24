import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../api.service';
import { ContactForm } from 'src/app/contact/contact-form';
import { ApiConst } from 'shared/const';

/**
 * お問合せサービス
 */
@Injectable()
export class ContactService extends ApiService {

  /**
   * お問合せ送信
   */
  public sendContact(form: ContactForm): Observable<boolean> {
    return this.post<boolean>(ApiConst.PATH.CONTACT, form);
  }
}
