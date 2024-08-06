// angular import
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// project import
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './theme/shared/shared.module';

// service import
import { ApirestService } from './servicios/apirest/apirest.service';

@NgModule({
  declarations: [AppComponent],
  imports: [HttpClientModule,BrowserModule, AppRoutingModule, SharedModule, BrowserAnimationsModule, ReactiveFormsModule],
  providers: [ApirestService],
  bootstrap: [AppComponent]
})
export class AppModule {







}
