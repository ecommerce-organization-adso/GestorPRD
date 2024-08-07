// angular import
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// project import
import tableData from 'src/fake-data/default-data.json';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { MonthlyBarChartComponent } from './monthly-bar-chart/monthly-bar-chart.component';
import { IncomeOverviewChartComponent } from './income-overview-chart/income-overview-chart.component';
import { AnalyticsChartComponent } from './analytics-chart/analytics-chart.component';
import { SalesReportChartComponent } from './sales-report-chart/sales-report-chart.component';

// icons
import { IconService } from '@ant-design/icons-angular';
import { FallOutline, GiftOutline, MessageOutline, RiseOutline, SettingOutline } from '@ant-design/icons-angular/icons';

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
    MonthlyBarChartComponent,
    IncomeOverviewChartComponent,
    AnalyticsChartComponent,
    SalesReportChartComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DefaultComponent {
  // constructor
  constructor(private iconService: IconService) {
    this.iconService.addIcon(...[RiseOutline, FallOutline, SettingOutline, GiftOutline, MessageOutline]);
  }

  recentOrder = tableData;

  AnalyticEcommerce = [
    {
      title: 'Crear',
      amount: '$35,078',
      background: 'bg-light-warning ',
      border: 'border-warning',
      icon: 'fall',
      percentage: '27.4%',
      color: 'text-warning',
      number: '$20,395'
    }
  ];

  transaction = [

    {
      background: 'text-primary bg-light-primary',
      icon: 'message',
      title: 'Order #984947',
      time: '5 August, 1:45 PM',
      amount: '- $302',
      percentage: '8%'
    },
    {
      background: 'text-danger bg-light-danger',
      icon: 'setting',
      title: 'Order #988784',
      time: '7 hours ago',
      amount: '- $682',
      percentage: '16%'
    }
  ];
}
