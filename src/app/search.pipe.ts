import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(users:any , term:string)
   {
      return users.filter(function(users){
          return users.title.toLowerCase().includes(term.toLowerCase());
      })
    
    }

}
