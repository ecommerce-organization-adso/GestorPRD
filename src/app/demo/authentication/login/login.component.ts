// angular import
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApirestService } from '../../../servicios/apirest/apirest.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export default class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';
  loginForm: FormGroup;


  constructor(private fb: FormBuilder, private ApirestService: ApirestService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
      // phone_number: ['', Validators.required],
      // email_address: ['', [Validators.required, Validators.email]],
      // password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
    console.log('SIIIIIIIIIIIIIIIIUUUUUUUUUUUUUUU');
  }

  onSubmit(): void {


    if (this.loginForm.valid) {

      const username = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;



      // Aquí puedes realizar validaciones adicionales si es necesario
      // Por ejemplo, validar el formato del correo electrónico, la longitud de la contraseña, etc.

      // Llamar al servicio para obtener los usuarios
      this.ApirestService.validarUsuario(username, password).subscribe(
        response => {
          console.log('Usuario validado exitosamente', response);
          // Aquí podrías guardar el usuario en sesión o realizar otras acciones necesarias
          this.router.navigate(['/dashboard']);  // Redirige al usuario a la página de dashboard
        },
        error => {
          console.error('Error al validar usuario', error);
          // Aquí podrías mostrar un mensaje de error al usuario
        }
      );
    } else {
      // Manejar el caso cuando el formulario no es válido
      console.error('Formulario inválido. Verifica los campos.');
    }
  }






  // public method
  SignInOptions = [
    {
      image: 'assets/images/authentication/google.svg',
      name: 'Google'
    },
    {
      image: 'assets/images/authentication/twitter.svg',
      name: 'Twitter'
    },
    {
      image: 'assets/images/authentication/facebook.svg',
      name: 'Facebook'
    }
  ];
}
