import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentage',
  standalone: true,
 
})
export class PercentagePipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(score: any, total: any, decimal = 2) {
    return ( (score/total) * 100).toFixed(decimal)+'%'
  }

}
