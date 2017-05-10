import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

import { IProduct } from './../iproduct';

@Component({
  //selector: 'app-product-edit-info',
  templateUrl: './product-edit-info.component.html',
  styleUrls: ['./product-edit-info.component.css']
})
export class ProductEditInfoComponent implements OnInit {

  @ViewChild(NgForm) productForm: NgForm;

  errorMessage: string;
  product: IProduct;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.parent.data.subscribe(data => {
      this.product = data['product'];

      if (this.productForm) {
        this.productForm.reset();
      }
    });
  }
}