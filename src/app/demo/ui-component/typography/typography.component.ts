// angular import
import { Component,ViewChild } from '@angular/core';
import { ApirestService } from 'src/app/servicios/apirest/apirest.service';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { CategoryTableComponent } from './category-table/category-table.component';


// third party
import {
  NgApexchartsModule,
  ChartComponent,
  ApexChart,
  ApexAxisChartSeries,
  ApexPlotOptions,
  ApexXAxis,
  ApexYAxis,
  ApexStroke,
  ApexGrid,
  ApexTooltip
} from 'ng-apexcharts';


export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  colors: string[];
  stroke: ApexStroke;
  grid: ApexGrid;
  yaxis: ApexYAxis;
  tooltip: ApexTooltip;
};

@Component({
  selector: 'app-typography',
  standalone: true,
  imports: [SharedModule,NgApexchartsModule,CategoryTableComponent],
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss']
})

export default class TypographyComponent {


  categoria = {
    category_name: '',
    description_category: '',
  };
  message: string;


  onSubmit() {
    // Cuando el formulario se envía, el objeto producto contiene los datos del formulario
    this.apiService.crearCategorias(this.categoria).subscribe(
      response => {
        this.message = ('Categoria creada exitosamente');

        // Puedes agregar lógica adicional aquí, como redirigir al usuario o mostrar un mensaje de éxito
      },
      error => {

        console.error('Error al crear el producto', error);
        // Maneja el error, por ejemplo, mostrando un mensaje de error al usuario
      }
    );
  }

 // public props
 @ViewChild('chart') chart!: ChartComponent;
 chartOptions!: Partial<ChartOptions>;

 //  constructor
 constructor(private apiService: ApirestService) {


   this.chartOptions = {
     chart: {
       type: 'line',
       height: 340,
       toolbar: {
         show: false
       },
       background: 'transparent'
     },
     plotOptions: {
       bar: {
         columnWidth: '45%',
         borderRadius: 4
       }
     },
     colors: ['#FFB814'],
     stroke: {
       curve: 'smooth',
       width: 1.5
     },
     grid: {
       strokeDashArray: 4,
       borderColor: '#f5f5f5'
     },
     series: [
       {
         data: [58, 90, 38, 83, 63, 75, 35, 55]
       }
     ],
     xaxis: {
       type: 'datetime',
       categories: [
         '2018-05-19T00:00:00.000Z',
         '2018-06-19T00:00:00.000Z',
         '2018-07-19T01:30:00.000Z',
         '2018-08-19T02:30:00.000Z',
         '2018-09-19T03:30:00.000Z',
         '2018-10-19T04:30:00.000Z',
         '2018-11-19T05:30:00.000Z',
         '2018-12-19T06:30:00.000Z'
       ],
       labels: {
         format: 'MMM',
         style: {
           colors: ['#222', '#222', '#222', '#222', '#222', '#222', '#222']
         }
       },
       axisBorder: {
         show: false
       },
       axisTicks: {
         show: false
       }
     },
     yaxis: {
       show: false
     },
     tooltip: {
       theme: 'light'
     }
   };
 }
}
