import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../user.model'; // Asegúrate de que la ruta de importación sea correcta


  @Injectable({
  providedIn: 'root',


  })

  export class ApirestService {


    private apiUrl = 'https://api-ecommerce-01.azurewebsites.net/api/product_categories/';
    constructor(private http: HttpClient) { }

    // getUsuarios() {
    //   return this.http.get('http://127.0.0.1:8000/api/empleados/');
    // }

    getUsuarios() {
      return this.http.get('https://api-ecommerce-01.azurewebsites.net/api/site_users/');
    }

    getProductos() {
      return this.http.get('https://api-ecommerce-01.azurewebsites.net/api/products/');
    }

    crearProducto(nuevoProducto: any) {
      return this.http.post('https://api-ecommerce-01.azurewebsites.net/api/products/', nuevoProducto);
    }

    obtenerCategoria() {
      return this.http.get('https://api-ecommerce-01.azurewebsites.net/api/product_categories/');
    }
    APICrearCategoria(nuevaCategoria: any): Observable<any> { // Acepta un argumento
      return this.http.post(this.apiUrl, nuevaCategoria); // Realiza una solicitud POST
    }



    actualizarProducto(producto: any) {
      // Se asume que tu API tiene una ruta para actualizar productos, por ejemplo, '/api/productos/:id/'.
      // Aquí usaremos la convención RESTful donde ':id' es el identificador único del producto.
      return this.http.put(`http://127.0.0.1:8000/api_drf/v1/producto/${producto.id}/`, producto);
    }

    eliminarProducto(id: any) {
      // Suponiendo que tu API tiene una ruta para eliminar productos, por ejemplo, '/api/productos/:id/'.
      // Aquí usaremos la convención RESTful donde ':id' es el identificador único del producto.
      return this.http.delete(`http://127.0.0.1:8000/api_drf/v1/producto/${id}/`);
    }

    deleteEstudios(id:any) {
      return this.http.delete('http://localhost:8000/api_drf/v1/estudios/'+id+"/");

   }
   registerUser(user: any) {
    return this.http.post('https://api-ecommerce-01.azurewebsites.net/api/site_users/', user);
  }

  validarUsuario(username: string, password: string) {
    return this.http.post('https://api-ecommerce-01.azurewebsites.net/api/site_users/', { username, password });
    // Ajusta la URL y los datos según la API de tu backend
  }

  //   // Método para iniciar sesión
  // login(username: string, password: string): void {
  //   this.apiService.validarUsuario(username, password).subscribe(
  //     (response: any) => {
  //       // Aquí manejas la respuesta de la API para validar el usuario
  //       if (response && response.token) { // Ejemplo: asumiendo que la API devuelve un token de sesión
  //         this.loggedIn = true;
  //         // Guarda el token o cualquier otro dato de sesión si es necesario
  //         localStorage.setItem('token', response.token);
  //         // Redirige al usuario a la página deseada después del inicio de sesión
  //         this.router.navigate(['/dashboard']);
  //       } else {
  //         this.loggedIn = false;
  //         // Manejar caso de usuario no válido
  //       }
  //     },
  //     error => {
  //       console.error('Error al iniciar sesión', error);
  //       this.loggedIn = false;
  //       // Manejar error de la API
  //     }
  //   );
  // }

    // Método para cerrar sesión
    // logout(): void {
    //   this.loggedIn = false;
    // }

    // // Método para verificar si hay sesión activa
    // isLoggedIn(): boolean {
    //   return this.loggedIn;
    // }



  }
