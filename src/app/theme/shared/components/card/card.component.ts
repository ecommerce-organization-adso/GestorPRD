// Angular import
import { Component, ContentChild, ElementRef, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApirestService } from 'src/app/servicios/apirest/apirest.service';
import { ProductTableComponent } from 'src/app/demo/ui-component/typography/product-table/product-table.component';
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
    category_id: '',
  };
  message: string;
  constructor(private apiService: ApirestService) {}

  onSubmit() {
    // Cuando el formulario se envía, el objeto producto contiene los datos del formulario
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
