import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pastDate'
})
export class PastDatePipe implements PipeTransform {

  transform(value: Date, args?: any): string {
    const diff = Date.now() - value.getTime();
    const diffYear = Math.floor(diff / 1000 / 60 / 60 / 24 / 30 / 12);
    const diffMonth = Math.floor(diff / 1000 / 60 / 60 / 24 / 30);
    const diffDay = Math.floor(diff / 1000 / 60 / 60 / 24);
    const diffHour = Math.floor(diff / 1000 / 60 / 60);
    const diffMinute = Math.floor(diff / 1000 / 60);

    if (0 < diffYear) {
      return diffYear.toString() + '年前';
    } else if (0 < diffMonth) {
      return diffMonth.toString() + 'か月前';
    } else if (0 < diffDay) {
      return diffDay.toString() + '日前';
    } else if (0 < diffHour) {
      return diffHour.toString() + '時間前';
    }
    return diffMinute.toString() + '分前';
  }

}
