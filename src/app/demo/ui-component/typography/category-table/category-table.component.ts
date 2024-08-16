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

  
  constructor(private apiService: ApirestService,public apirestservice: ApirestService) {}

  categorias: any[] = [];

  ngOnInit(): void {
    this.obtenerCategorias();
  }


  obtenerCategorias() {
    this.apirestservice.obtenerCategoria().subscribe(
      (responseP: any) => {
        this.categorias = responseP;
        console.log(this.categorias);
      },
      (error) => {
        console.error('Error al obtener categorias:', error);
      }
    );
  }




}
