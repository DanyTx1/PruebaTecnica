import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'grado'
})
export class GradoPipe implements PipeTransform {

  // Mapa de grados
  gradoMap = {
    1: 'Primero Primaria',
    2: 'Segundo Primaria',
    3: 'Tercero Primaria',
    4: 'Cuarto Primaria',
    5: 'Quinto Primaria',
    6: 'Sexto Primaria',
    7: 'Primero Secundaria',
    8: 'Segundo Secundaria',
    9: 'Tercero Secundaria'
  };

  transform(value: number): string {
    // Retorna el nombre del grado, o un mensaje si el grado no existe en el mapa
    // @ts-ignore
    return this.gradoMap[value] || 'Grado no encontrado';
  }


}
