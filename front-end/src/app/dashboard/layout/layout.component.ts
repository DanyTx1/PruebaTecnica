import { Component } from '@angular/core';
import {FormAlumnoComponent} from '../../components/form-alumno/form-alumno.component';
import {TablaAlumnosComponent} from '../../components/tabla-alumnos/tabla-alumnos.component';

@Component({
  selector: 'app-layout',
  imports: [FormAlumnoComponent, TablaAlumnosComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
