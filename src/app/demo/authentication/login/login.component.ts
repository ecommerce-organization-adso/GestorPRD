import { Component, OnInit } from '@angular/core';
import { Router,RouterModule  } from '@angular/router';
import { ApirestService } from '../../../servicios/apirest/apirest.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { AuthService } from 'src/app/auth.service';

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
  id: boolean = false;
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

  constructor(private apirestService: ApirestService, private router: Router,private authService: AuthService) {}

  ngOnInit(): void {
    console.log('Componente de login inicializado');
  }

  handleClick(): void {
    this.authService.login(this.email, this.password).subscribe((isLoggedIn: boolean) => {
      if (isLoggedIn) {
        console.log('¡Usuario logueado!');
      } else {
        this.errorMessage = 'El usuario no existe o la contraseña es incorrecta.';
      }
    });
  }

  handleFormSubmit(): void {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('Remember Me:', this.rememberMe);
    this.handleClick();
  }
}
