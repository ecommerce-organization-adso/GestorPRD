import { Component, OnInit } from '@angular/core';
import { Router,RouterModule  } from '@angular/router';
import { ApirestService } from '../../../servicios/apirest/apirest.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    FormsModule,
    RouterModule,
    CommonModule, // Asegúrate de importar CommonModule
  ],
  styleUrls: ['./login.component.scss']
})


export default class LoginComponent implements OnInit {
  username: string = '';
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;
  errorMessage: string = ''; // Variable para almacenar el mensaje de error

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

  constructor(private apirestService: ApirestService, private router: Router) {}

  ngOnInit(): void {
    console.log('Componente de login inicializado');
  }

  handleClick(): void {
    this.apirestService.getUsuarios().subscribe(
      (response: any[]) => {
        // Validar tanto el nombre de usuario como la contraseña
        const userExists = response.some((user: any) => user.username === this.email && user.password === this.password);

        if (userExists) {
          console.log('¡Usuario logueado!', response);
          this.router.navigate(['/dashboard/default']); // Redirigir a 'dashboard/default' si es correcto
        } else {
          this.errorMessage = 'El usuario no existe o la contraseña es incorrecta.';
        }
      },
      error => {
        console.error('Error al consultar la API', error);
        this.errorMessage = 'Error al consultar la API';
      }
    );
  }

  handleFormSubmit(): void {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('Remember Me:', this.rememberMe);
    this.handleClick();
  }
}
