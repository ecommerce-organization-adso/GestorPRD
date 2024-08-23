import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms'; // Para manejar formularios reactivos
import { RouterModule } from '@angular/router';
import { map, catchError } from 'rxjs/operators';
import { ApirestService } from 'src/app/servicios/apirest/apirest.service';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    CommonModule, // Asegúrate de importar CommonModule
  ],
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  forgotPasswordForm: FormGroup;
  isSubmitted = false;
  isLoading = false;
  successMessage = '';
  errorMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private apirestService: ApirestService
  ) {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }




  onSubmit() {
    this.isSubmitted = true;
    this.isLoading = true;

    return this.apirestService.getUsuarios().pipe(

      map((response2: any[]) => {
                    console.log("AAAAAAAAAAAAAAAAAAAAAAAAA");

        console.log(this.forgotPasswordForm.value.email);

        const user = response2.find((user: any) => user.email === this.forgotPasswordForm.value.email);
        if (user) {
          // Usar bcrypt.compareSync para evitar problemas de retorno
            // Si la contraseña es correcta, guarda el ID del usuario y redirige
            // localStorage.setItem('userId', user.id);
            console.log("CORREO ENVIADO");

        } else {
          // Usuario no encontrado
          console.log('Usuario no encontrado');
        }
      }),
      catchError(error => {
        console.error('Error al consultar la API', error);
        return of(false);
      })
    );
  }
}
