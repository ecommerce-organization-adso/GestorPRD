// Angular import
import { Component, ContentChild, ElementRef, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApirestService } from 'src/app/servicios/apirest/apirest.service';
import { ProductTableComponent } from 'src/app/demo/ui-component/typography/product-table/product-table.component';
import { DomSanitizer } from '@angular/platform-browser'; // Para manejar la vista previa


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule,FormsModule,ProductTableComponent],
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


  ruta: string = ''; // Para almacenar la ruta de la imagen

  message: string;
  selectedFile: File | null = null;
  imagePreview: any = null;
  rutaImagen: string = ''; // Para almacenar la ruta de la imagen


  constructor(private apiService: ApirestService,private sanitizer: DomSanitizer) {}





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


      this.ruta = this.selectedFile.name;
      this.ruta = this.selectedFile.name;
      formData.append('image', this.selectedFile!, this.selectedFile!.name);

       // Construir el JSON para enviar
      const payload = {
        ruta: '', // Si es necesario, asigna una ruta o URL de la imagen aquí
        producto: {
          // Otros campos del producto
          image: this.imagePreview, // Añadir la imagen si tu API acepta base64, o manejar de otra manera
        },
      };

      console.log("////////////////////////////////////////");

      console.log("////////////////////////////////////////");


      this.apiService.crearProducto(this.producto).subscribe(
        response => {
          this.message = ('Producto creado exitosamente');

          // Puedes agregar lógica adicional aquí, como redirigir al usuario o mostrar un mensaje de éxito
        },
        error => {

          console.error('Error al crear el producto', error);
          // Maneja el error, por ejemplo, mostrando un mensaje de error al usuario
        }
      );

      //////SUBE IMAGEN ///////////////////////////////////////////////
      this.apiService.subirImagen(payload).subscribe(



        response => {



          // Suponiendo que el backend devuelve la URL de la imagen
          this.rutaImagen = response.ruta;
          console.log('Imagen subida exitosamente', response);



          },
          error => {
            console.error('Error al subir la imagen', error);
          }
        );
       //////FIN IMAGEN ///////////////////////////////////////////////





      } else {
        console.error('No se ha seleccionado ninguna imagen.');
      }
  }

  // public props
  /**
   * Title of card. It will be visible at left side of card header
   */
  @Input() cardTitle!: string;

  /**
   * Class to be applied at card level
   */
  @Input() cardClass!: string;

  /**
   * To hide content from card
   */
  @Input() showContent = true;

  /**
   * Class to be applied at card content.
   */
  @Input() blockClass!: string;

  /**
   * Class to be applied on card header
   */
  @Input() headerClass!: string;

  /**
   * To hide header from card
   */
  @Input() showHeader = true;

  /**
   * padding around card content. default in px
   */
  @Input() padding = 20; // set default to 24 px

  /**
   * Template reference of header actions on custom header
   */
  @ContentChild('headerOptionsTemplate') headerOptionsTemplate!: TemplateRef<ElementRef>;

  /**
   * Template reference of header actions besides title at left
   */
  @ContentChild('headerTitleTemplate') headerTitleTemplate!: TemplateRef<ElementRef>;
}
