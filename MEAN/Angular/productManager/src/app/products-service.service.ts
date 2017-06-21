import { Injectable } from '@angular/core';
import { Product } from './product';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ProductsServiceService {

  productsObservable = new BehaviorSubject(null)

  constructor() { }
  products = []

  updateProducts(products: Array<Product>){
    this.productsObservable.next(products);
  }

  getOneProduct(idx){
    return this.productsObservable[idx];
  }

}
