import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PhotoService } from './photo.service';
import { Photo } from './photo';

/**
 * 写真サービス
 * モック
 */
@Injectable()
export class PhotoMockService extends PhotoService {

}
