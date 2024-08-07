// angular import
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApirestService } from '../../../servicios/apirest/apirest.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export default class LoginComponent implements OnInit {

  username: string = '';


  constructor(private apirestService: ApirestService) {}

  ngOnInit(): void {
    console.log('SIIIIIIIIIIIIIIIIUUUUUUUUUUUUUUU');
  }

  handleClick(): void {
    this.apirestService.getUsuarios().subscribe(
      response => {
        if (response) {
          console.log('!Usuario logueado!!!!!!!!!!!!!!!!!!!!',response);
        } else {
          console.log('El usuario no existe.');
        }
      },
      error => {
        console.error('Error al consultar la API', error);
      }
    );
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
