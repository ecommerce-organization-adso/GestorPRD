import { Component } from '@angular/core';
import { ApirestService } from 'src/app/servicios/apirest/apirest.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-table.component.html',
  styleUrl: './product-table.component.scss'
})
export class ProductTableComponent {


  constructor(private apiService: ApirestService,public apirestservice: ApirestService) {}

  productos: any[] = [];

  ngOnInit(): void {
    this.obtenerProductos();
  }


  obtenerProductos() {
    this.apirestservice.getProductos().subscribe(
      (responseP: any) => {
        this.productos = responseP;
        console.log(this.productos);
      },
      (error) => {
        console.error('Error al obtener categorias:', error);
      }
    );
  }



}
