import { Pipe, PipeTransform } from '@angular/core';
import { SearchOption } from './search.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: SearchOption[], searchTxt: string | undefined = undefined, multiple: boolean = false, selectedValues: any[] | undefined = undefined): any[] {
    if (!items || !items.length)
      return items;
    if (!searchTxt || !searchTxt.length)
      return items;


    if (multiple && selectedValues?.length) {
      let backupItems: any[] = items.filter(x => selectedValues.indexOf(x.value) > -1) ?? [];

      return [...new Set(backupItems.concat(items.filter(item => item.text.toLowerCase().indexOf(searchTxt.toLowerCase()) > -1)))].reverse();
    }

    return items.filter(item => item.text.toLowerCase().indexOf(searchTxt.toLowerCase()) > -1);
  }

}
