import { Pipe, PipeTransform } from '@angular/core';

type StayDate = Date | string | null;

@Pipe({
  name: 'stayDuration',
})
export class StayDurationPipe implements PipeTransform {
  transform(startDate: StayDate, endDate: StayDate): string {
    if (!startDate || !endDate) {
      return '';
    }
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = end.getTime() - start.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays <= 0) {
      return '';
    }

    return diffDays === 1 ? '1 jour' : `${diffDays} jours`;
  }
}
