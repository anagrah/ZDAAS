import { DatePipe } from '@angular/common';
import {
   Pipe,
   PipeTransform
} from '@angular/core';

@Pipe({
   name: 'CDataFilter'
})

export class DataFilterCustomPipe implements PipeTransform {
   transform(source: any[], filter: string): any {      
      filter = filter.replace(/\s/g, "");
      let result = source[filter];
      if (filter == 'CreatedDate' || filter == 'CloseDate') {
         let pipe = new DatePipe('en-US');
         result = pipe.transform(result, 'MM/dd/yyyy');
      }
      return result;
   }
} 