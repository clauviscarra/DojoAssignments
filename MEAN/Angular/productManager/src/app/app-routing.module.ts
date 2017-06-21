import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { CreateNewComponent } from './create-new/create-new.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {  path: '', pathMatch: 'full', component: HomeComponent },
  {  path: 'products/list',  component: ProductsComponent },
  {  path: 'products/create',  component: CreateNewComponent },
  {  path: 'products/edit/:idx',  component: EditProductComponent },
  {  path: 'products/destroy',  redirectTo: 'products/list' }





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
