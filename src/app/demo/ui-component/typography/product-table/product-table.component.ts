import { Component } from '@angular/core';
import { ApirestService } from 'src/app/servicios/apirest/apirest.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-table',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './product-table.component.html',
  styleUrl: './product-table.component.scss'
})
export class ProductTableComponent {

  productos: any[] = [];

  constructor(private apiService: ApirestService) {}

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos() {
    this.apiService.getProductos().subscribe(
      (responseP: any) => {
        this.productos = responseP;
        console.log(this.productos);
      },
      (error) => {
        console.error('Error al obtener productos:', error);
      }
    );
  }

  // editarProducto(producto: any): void {
  //   // Aquí podrías abrir un modal o redirigir a un formulario de edición
  //   console.log('Producto a editar:', producto);
  //   // Implementa la lógica necesaria para editar el producto
  // }


  selectedProduct: any;
  isModalOpen = false;

 openModal(producto: any) {
  this.selectedProduct = { ...producto };
  this.isModalOpen = true;
  console.log('Modal abierto:', this.isModalOpen); // Debería mostrar "true"
}

  closeModal() {
    this.isModalOpen = false;
  }

  actualizarProducto(producto: any) {
    this.apiService.ServiceActualizarProducto(producto).subscribe({
      next: (response) => {
        console.log('Producto actualizado con éxito', response);
        this.isModalOpen = false;
        // Aquí actualizas la lista de productos si es necesario
      },
      error: (error) => {
        console.error('Error al actualizar el producto', error);
      }
    });
  }

  eliminarProducto(productoId: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este producto?')) {
      this.apiService.eliminarProducto(productoId).subscribe(
        () => {
          this.productos = this.productos.filter(producto => producto.id !== productoId);
          console.log('Producto eliminado con éxito');
        },
        (error) => {
          console.error('Error al eliminar el producto:', error);
        }
      );
    }
  }
}
