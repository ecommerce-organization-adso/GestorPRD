import { Component, ContentChild, ElementRef, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApirestService } from 'src/app/servicios/apirest/apirest.service';
import { ProductTableComponent } from 'src/app/demo/ui-component/typography/product-table/product-table.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductTableComponent],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  producto = {
    name: '',
    description: '',
    price: '',
    quantity: '',
    status: '',
    image: '',
    category: '',
  };

  selectedFile: File | null = null;
  imagePreview: any = null;
  rutaImagen: string = ''; // Para almacenar la ruta de la imagen
  message: string = '';

  constructor(private apiService: ApirestService, private sanitizer: DomSanitizer) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];

    // Crear una vista previa de la imagen
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = this.sanitizer.bypassSecurityTrustUrl(reader.result as string);
    };
    reader.readAsDataURL(this.selectedFile);
  }

  onSubmit() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('image', this.selectedFile!, this.selectedFile!.name);

      // Primero, sube la imagen al servidor
      this.apiService.subirImagen(formData).subscribe(
        response => {
          // Suponiendo que el backend devuelve la URL de la imagen
          this.rutaImagen = response.ruta;
          console.log('Imagen subida exitosamente', response);

          // Ahora que la imagen está subida, guarda el producto con la ruta de la imagen
          this.producto.image = this.rutaImagen;

          // Envía los datos del producto al servidor
          this.apiService.crearProducto(this.producto).subscribe(
            response => {
              this.message = 'Producto creado exitosamente';
              console.log('Producto creado exitosamente', response);
            },
            error => {
              console.error('Error al crear el producto', error);
            }
          );

        },
        error => {
          console.error('Error al subir la imagen', error);
        }
      );

    } else {
      console.error('No se ha seleccionado ninguna imagen.');
    }
  }

  // Otros métodos y propiedades...

}
