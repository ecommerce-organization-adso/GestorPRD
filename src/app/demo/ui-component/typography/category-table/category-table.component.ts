import { Component } from '@angular/core';
import { ApirestService } from 'src/app/servicios/apirest/apirest.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-table',
  standalone: true,
  imports: [CommonModule],
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

  editarCategoria(categoria: any): void {
    console.log('Categoría a editar:', categoria);
    // Implementa la lógica para editar la categoría aquí
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
