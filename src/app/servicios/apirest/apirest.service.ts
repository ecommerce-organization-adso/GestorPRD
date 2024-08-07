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


    crearCategorias(nuevaCategoria: any) {
      return this.http.post('https://api-ecommerce-01.azurewebsites.net/api/product_categories/', nuevaCategoria);
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


  }


