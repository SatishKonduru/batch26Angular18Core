import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true,
  pure: false
})
export class FilterPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(list: any[], filterBy: string) {
      if(filterBy.toLowerCase() === 'all'){
        return list
      }
      else{
        return list.filter((std) => {
          return std.gender.toLowerCase() === filterBy.toLowerCase()
        })
      }
  }

}
