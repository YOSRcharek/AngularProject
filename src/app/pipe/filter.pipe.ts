import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

 /* transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
    */
  transform(items: any[], searchText: string): any[] {
    if ( !searchText) {
      return items; 
    }

    return items.filter(item => 
      item.title.toLowerCase().includes(searchText) 
    );

}
}
