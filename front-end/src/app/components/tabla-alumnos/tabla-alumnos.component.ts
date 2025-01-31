import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../service/auth.service';
import Swal from 'sweetalert2';
import {GradoPipe} from '../../core/pipes/grado.pipe';


@Component({
  selector: 'app-tabla-alumnos',
  standalone: true,
  imports: [CommonModule, FormsModule, GradoPipe],
  templateUrl: './tabla-alumnos.component.html',
  styleUrl: './tabla-alumnos.component.css'
})
export class TablaAlumnosComponent {

  gradoSeleccionado: number = 0;  // Variable para almacenar el grado seleccionado
  alumnos: any[] = [];  // Lista de alumnos obtenidos de la API

  constructor(private http: HttpClient, private service_: AuthService) {}

  buscarAlumnos() {

    this.service_.getAlumnosByGrado(this.gradoSeleccionado).subscribe(
      (data) => {
        this.alumnos = data;
        if (this.alumnos.length === 0) {
          Swal.fire({
            icon: 'warning',
            title: '!No hay alumnos registrados!',
          });
        }
      },
      (error) => {
        Swal.fire({
          icon: 'warning',
          title: '!Ha ocurrido algo inesperado!',
          text: 'Intentelo más tarde'
        });
      }
    )

  }

}
