import { Component } from '@angular/core';
import { ProductsServiceService } from './products-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  products=[];

  constructor(private _productsService: ProductsServiceService){
    this._productsService.updateProducts(this.products);
    this._productsService.productsObservable.subscribe((products)=>{this.products = products
  });
  }
}
