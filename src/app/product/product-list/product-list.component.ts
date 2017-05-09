import { ProductService } from './../product.service';
import { IProduct } from './../iproduct';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle = "Product List";
  errorMessage: string;
  listFilter: string;

  products: IProduct[];

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.listFilter = this.route.snapshot.queryParams['filterBy'] || '';
    this.productService.getProducts()
      .subscribe(products => this.products = products,
        error => this.errorMessage = <any>error);
  }

}
