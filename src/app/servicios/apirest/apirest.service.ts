// apirest.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApirestService {

  private apiUrl = 'https://api-ecommerce-01.azurewebsites.net/api/categorias/';

  constructor(private http: HttpClient) { }

  // getUsuarios() {
  //   return this.http.get('https://api-ecommerce-01.azurewebsites.net/api/site_users/');
  // }

  getUsuarios() {
    return this.http.get('https://api-ecommerce-01.azurewebsites.net/api/usuarios/');
  }

  // getProductos(): Observable<any> {
  //   return this.http.get('https://api-ecommerce-01.azurewebsites.net/api/products/');
  // }
  getProductos(): Observable<any> {
    return this.http.get('https://api-ecommerce-01.azurewebsites.net/api/productos/');
  }

  // crearProducto(nuevoProducto: any): Observable<any> {
  //   return this.http.post('https://api-ecommerce-01.azurewebsites.net/api/products/', nuevoProducto);
  // }

  crearProducto(nuevoProducto: any): Observable<any> {
    return this.http.post('https://api-ecommerce-01.azurewebsites.net/api/productos/', nuevoProducto);
  }

  subirImagen(formData: FormData): Observable<any> {
    return this.http.post('https://api-ecommerce-01.azurewebsites.net/api/imagenes/', formData);
  }

  // crearCategorias(nuevaCategoria: any): Observable<any> {
  //   return this.http.post('https://api-ecommerce-01.azurewebsites.net/api/product_categories/', nuevaCategoria);
  // }

    crearCategorias(nuevaCategoria: any): Observable<any> {
    return this.http.post('https://api-ecommerce-01.azurewebsites.net/api/categorias/', nuevaCategoria);
  }


  // eliminarCategoria(id: any): Observable<any> {
  //   return this.http.delete(`http://127.0.0.1:8000/product_categories/`,id);
  // }

  eliminarCategoria(id: any): Observable<any> {
    return this.http.delete(`http://127.0.0.1:8000/categorias/`,id);
  }
  // obtenerCategoria(): Observable<any> {
  //   return this.http.get('https://api-ecommerce-01.azurewebsites.net/api/product_categories/');
  // }

  obtenerCategoria(): Observable<any> {
    return this.http.get('https://api-ecommerce-01.azurewebsites.net/api/categorias/');
  }

  APICrearCategoria(nuevaCategoria: any): Observable<any> {
    return this.http.post(this.apiUrl, nuevaCategoria);
  }

  ServiceActualizarCategoria(categoria: any): Observable<any> {
    return this.http.put(`https://api-ecommerce-01.azurewebsites.net/api/productos/${categoria.id}/`,categoria);
  }
  // actualizarProducto(producto: any): Observable<any> {
  //   return this.http.put(`https://api-ecommerce-01.azurewebsites.net/api/products/`,producto);
  // }

  ServiceActualizarProducto(producto: any): Observable<any> {
    return this.http.put(`https://api-ecommerce-01.azurewebsites.net/api/productos/${producto.id}/`,producto);
  }

  // eliminarProducto(id: any): Observable<any> {
  //   return this.http.delete(`https://api-ecommerce-01.azurewebsites.net/api/products/${id}`);
  // }

  eliminarProducto(id: any): Observable<any> {
    return this.http.delete(`https://api-ecommerce-01.azurewebsites.net/api/productos/${id}`);
  }

  deleteEstudios(id: any): Observable<any> {
    return this.http.delete(`http://localhost:8000/api_drf/v1/estudios/${id}/`);
  }

  // registerUser(user: any) {
  //   return this.http.post('https://api-ecommerce-01.azurewebsites.net/api/site_users/', user);
  // }
  registerUser(user: any) {
    return this.http.post('https://api-ecommerce-01.azurewebsites.net/api/usuarios/', user);
  }

  // validarUsuario(username: string, password: string) {
  //   return this.http.post('https://api-ecommerce-01.azurewebsites.net/api/site_users/', { username, password });
  //   // Ajusta la URL y los datos según la API de tu backend
  // }

   validarUsuario(username: string, password: string) {
    return this.http.post('https://api-ecommerce-01.azurewebsites.net/api/usuarios/', { username, password });
    // Ajusta la URL y los datos según la API de tu backend
  }
}
