import { Component, OnInit } from '@angular/core';
import { Product } from '../product'
import { NgForm } from '@angular/forms'
import { ProductsServiceService} from '../products-service.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.css']
})
export class CreateNewComponent implements OnInit {

  product = new Product();
  products = [];

  constructor(
    private _productsService: ProductsServiceService,
    private _router: Router
  ) {
    this._productsService. productsObservable.subscribe((products) =>{this.products = products})}



  ngOnInit() {
  }

  create(){
    this.products.push(this.product);
    this._productsService.updateProducts(this.products); console.log(this.products)
    this.product = new Product();
    this._router.navigate(['/products/list'])

  }

}
