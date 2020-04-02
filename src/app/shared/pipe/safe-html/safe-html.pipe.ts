import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml'
})
export class SafeHtmlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }

  transform(value: string, ...args: unknown[]): SafeUrl {
    if (value) {
      return this.sanitizer.bypassSecurityTrustUrl(value);
    }
    return null;
  }

}
