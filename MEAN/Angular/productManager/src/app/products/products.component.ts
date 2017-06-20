import { Component, OnInit } from '@angular/core';
import { Product } from '../product'
import { ProductsServiceService } from '../products-service.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = [];
  constructor(private _productsService: ProductsServiceService) { }

  ngOnInit() {
    this._productsService.productsObservable.subscribe((products)=> this.products = products);
  }

}
