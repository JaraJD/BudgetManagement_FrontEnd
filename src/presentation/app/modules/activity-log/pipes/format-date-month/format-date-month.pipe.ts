import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDateMonth'
})
export class FormatDateMonthPipe implements PipeTransform {

  transform(date: string): string {
    const smallDate = date.substring(0, 7);
    return smallDate;
  }

}
