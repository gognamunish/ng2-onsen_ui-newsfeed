import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'sourceNewsFilter'
})

export class SourceNewsFilterPipe implements PipeTransform {
 
    transform(value, data) {
      console.log ('>>> ' + data);
      return value ? value.filter(source=> source.name.toLocaleLowerCase().indexOf(data.toLocaleLowerCase()) != -1) : value;
    }
}