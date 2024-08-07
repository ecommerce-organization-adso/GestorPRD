// angular import
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// project import
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './theme/shared/shared.module';

// service import
import { ApirestService } from './servicios/apirest/apirest.service';

@NgModule({
  declarations: [AppComponent],
  imports: [FormsModule,HttpClientModule,BrowserModule, AppRoutingModule, SharedModule, BrowserAnimationsModule],
  providers: [ApirestService],
  bootstrap: [AppComponent]
})
export class AppModule {







}
