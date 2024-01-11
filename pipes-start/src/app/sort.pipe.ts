import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): unknown {
    return value.sort((a: { name: string }, b: { name: string }) => a.name < b.name ? -1 : 1);
  }

}
