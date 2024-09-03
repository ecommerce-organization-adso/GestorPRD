import { Component } from '@angular/core';
import { ApirestService } from 'src/app/servicios/apirest/apirest.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-category-table',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './category-table.component.html',
  styleUrl: './category-table.component.scss'
})
export class CategoryTableComponent {

  categorias: any[] = [];

  constructor(private apiService: ApirestService) {}

  ngOnInit(): void {
    this.obtenerCategorias();
  }

  obtenerCategorias() {
    this.apiService.obtenerCategoria().subscribe(
      (responseP: any) => {
        this.categorias = responseP;
        console.log(this.categorias);
      },
      (error) => {
        console.error('Error al obtener categorías:', error);
      }
    );
  }

  selectedCategory: any;
  isModalOpentwo = false;
  
 openModal(categoria: any) {
  this.selectedCategory = { ...categoria };
  this.isModalOpentwo = true;
  console.log('Modal abierto:', this.isModalOpentwo); // Debería mostrar "true"
}
  
  closeModal() {
    this.isModalOpentwo = false;
  }
  
  actualizarCategoria(categoria: any) {
    this.apiService.ServiceActualizarCategoria(categoria).subscribe({
      next: (response) => {
        console.log('Categoria actualizado con éxito', response);
        this.isModalOpentwo = false;
        // Aquí actualizas la lista de productos si es necesario
      },
      error: (error) => {
        console.error('Error al actualizar el producto', error);
      }
    });
  }

  eliminarCategoria(categoriaId: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar esta categoría?')) {
      this.apiService.eliminarCategoria(categoriaId).subscribe(
        () => {
          this.categorias = this.categorias.filter(categoria => categoria.id !== categoriaId);
          console.log('Categoría eliminada con éxito');
        },
        (error) => {
          console.error('Error al eliminar la categoría:', error);
        }
      );
    }
  }
}
