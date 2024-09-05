// Angular import
import { Component, ContentChild, ElementRef, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApirestService } from 'src/app/servicios/apirest/apirest.service';
import { ProductTableComponent } from 'src/app/demo/ui-component/typography/product-table/product-table.component';
import { DomSanitizer } from '@angular/platform-browser'; // Para manejar la vista previa
import { ReactiveFormsModule,FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule,ProductTableComponent],
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


  constructor(private apiService: ApirestService,private sanitizer: DomSanitizer,private http: HttpClient) {}


  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
  onSubmit() {



      this.apiService.crearProducto(this.producto).subscribe(
        (nuevoProducto) => {
          this.message = 'Producto creado exitosamente';
          //console.log('El ID del producto creado es:', idProducto);

          if (this.selectedFile) {
            const formData = new FormData();
            formData.append('file', this.selectedFile, this.selectedFile.name);
            this.http.post('http://127.0.0.1/TiendaVirtual/CargarImagen.php', formData)
            .subscribe({
              next: (response: any) => { // Asegúrate de que 'response' se maneje como un objeto JSON
                console.log('File uploaded successfully:', response);
                console.log(response.ruta);

                console.log("responseeeeeeeeeeeeeeeeeeeeee");

                // Acceder a la propiedad 'ruta' desde la respuesta
                const uploadedFilePath = response.ruta;
                const idProducto = nuevoProducto.id; // Obtén el ID del producto


                if (idProducto) {
                  // Crear el objeto JSON con la estructura requerida
                  const dataToSend = {
                    ruta: uploadedFilePath,  // Asegúrate de que uploadedFilePath esté definido correctamente
                    producto: idProducto     // Asegúrate de que idProducto esté definido correctamente
                  };
                  this.apiService.subirImagen(dataToSend).subscribe(
                    (response) => {
                      console.log('Respuesta del servidor:', response); // Verifica la estructura de la respuesta
                      alert('Archivo y datos del producto guardados correctamente.');
                    },
                    error => {
                      console.error('Error al crear el producto:', error);
                      // Maneja el error, por ejemplo, mostrando un mensaje de error al usuario
                    }
                  );
                }


                console.log('Ruta del archivo subido:', uploadedFilePath);

                // Aquí puedes hacer algo con la ruta, como mostrarla en la interfaz o usarla de otra manera
                alert('Archivo subido correctamente. Ruta: ' + uploadedFilePath);
              },
              error: (error) => {
                console.error('Error uploading file:', error);
                alert('Error al subir el archivo.');
              }
            });
          }



        },
        error => {
          console.error('Error al crear el producto', error);
          // Maneja el error, por ejemplo, mostrando un mensaje de error al usuario
        }
      );

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
