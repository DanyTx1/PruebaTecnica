import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {HttpClient,} from '@angular/common/http';
import {AuthService} from '../../service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-alumno',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-alumno.component.html',
  styleUrls: ['./form-alumno.component.css']
})
export class FormAlumnoComponent {

   alumnoForm: FormGroup;

   constructor(private fb: FormBuilder, private http: HttpClient, private service_: AuthService) {

     this.alumnoForm = this.fb.group({
       nombre_alumno: ['', Validators.required],
       fecha_nacimiento: ['', Validators.required],
       nombre_padre: ['', Validators.required],
       nombre_madre: ['', Validators.required],
       grado: ['', Validators.required],
       seccion: ['', Validators.required],
     });


   }

  onSubmit() {
    if (this.alumnoForm.valid) {
      const alumnoData = this.alumnoForm.value;
      console.log(alumnoData);  // Aquí puedes ver los datos del formulario

      // Llamamos al servicio para registrar al alumno
      this.service_.registrarAlumno(alumnoData).subscribe(
        (response) => {
          // Si la petición es exitosa
          console.log('Alumno registrado exitosamente:', response);
          Swal.fire({
            icon: 'success',
            title: '¡Registro exitoso!',
            text: 'El alumno ha sido registrado correctamente.'
          });
          this.alumnoForm.reset();  // Resetear el formulario después de enviar los datos
        },
        (error) => {
          // Si ocurre algún error con la petición
          console.error('Error al registrar alumno:', error);
          Swal.fire({
            icon: 'error',
            title: '¡Error!',
            text: 'Ocurrió un error al registrar al alumno. Inténtelo más tarde.'
          });
        }
      );
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Formulario incompleto',
        text: 'Por favor, complete todos los campos requeridos.'
      });
    }
  }

}
