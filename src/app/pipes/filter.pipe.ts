import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any[]): any {
    const resultIngreso = [];
    for(const ingreso of value){
      if(ingreso.area.indexOf(arg) > -1){
        resultIngreso.push(ingreso);
      };
    };
    return resultIngreso;
  }

}
