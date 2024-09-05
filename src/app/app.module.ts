// angular import
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'; // Asegúrate de importar esto
import { CommonModule } from '@angular/common'; // Importa CommonModule
// project import
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './theme/shared/shared.module';

// service import
import { ApirestService } from './servicios/apirest/apirest.service';

@NgModule({
  declarations: [AppComponent],
  imports: [RouterModule,FormsModule,HttpClientModule,BrowserModule, AppRoutingModule, SharedModule, BrowserAnimationsModule,CommonModule,ReactiveFormsModule],
  providers: [ApirestService],
  bootstrap: [AppComponent]
})
export class AppModule {







}
