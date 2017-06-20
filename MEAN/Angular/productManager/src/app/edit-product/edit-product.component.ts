import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsServiceService} from '../products-service.service'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  products = [];
  product = new Product();
  index = 0;


  constructor(private _route: ActivatedRoute, private _router: Router, private _productsService: ProductsServiceService ) {  this._route.params.subscribe(param => {
    this.index = (param.idx);

      console.log(this.index);



      })

  }
  ngOnInit() {
    this._productsService.productsObservable.subscribe(products =>{this.products = products;})


  }

  update(){
    this._productsService.updateProducts(this.products); console.log(this.products)
    this.product = new Product();
    this._router.navigate(['/products/list'])
  }

}
