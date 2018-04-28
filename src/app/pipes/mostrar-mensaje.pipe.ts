import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mostrarMensaje'
})
export class MostrarMensajePipe implements PipeTransform {

  transform(value: any, args?: any): any {

      let mensaje = value.substr(0,50);
      let dots = "...";
      let mensajeFinal = mensaje + dots;
      return mensajeFinal;
  }

}
