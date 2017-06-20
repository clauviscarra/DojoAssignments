import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { ProductsServiceService } from './products-service.service'

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { CreateNewComponent } from './create-new/create-new.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CreateNewComponent,
    EditProductComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ProductsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
