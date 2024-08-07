// apirest.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApirestService {

  private apiUrl = 'https://api-ecommerce-01.azurewebsites.net/api/product_categories/';

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<any> { // Cambiamos el tipo de retorno a 'any'
    return this.http.get('https://api-ecommerce-01.azurewebsites.net/api/site_users/');
  }

  getProductos(): Observable<any> {
    return this.http.get('https://api-ecommerce-01.azurewebsites.net/api/products/');
  }

  crearProducto(nuevoProducto: any): Observable<any> {
    return this.http.post('https://api-ecommerce-01.azurewebsites.net/api/products/', nuevoProducto);
  }

  crearCategorias(nuevaCategoria: any): Observable<any> {
    return this.http.post('https://api-ecommerce-01.azurewebsites.net/api/product_categories/', nuevaCategoria);
  }

  obtenerCategoria(): Observable<any> {
    return this.http.get('https://api-ecommerce-01.azurewebsites.net/api/product_categories/');
  }

  APICrearCategoria(nuevaCategoria: any): Observable<any> {
    return this.http.post(this.apiUrl, nuevaCategoria);
  }

  actualizarProducto(producto: any): Observable<any> {
    return this.http.put(`http://127.0.0.1:8000/api_drf/v1/producto/${producto.id}/`, producto);
  }

  eliminarProducto(id: any): Observable<any> {
    return this.http.delete(`http://127.0.0.1:8000/api_drf/v1/producto/${id}/`);
  }

  deleteEstudios(id: any): Observable<any> {
    return this.http.delete(`http://localhost:8000/api_drf/v1/estudios/${id}/`);
  }
}
