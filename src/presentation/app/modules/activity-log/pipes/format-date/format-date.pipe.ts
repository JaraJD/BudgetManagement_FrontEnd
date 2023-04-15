import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(date: string): string {
    const smallDate = date.substring(0, 10);
    return smallDate;
  }

}
