import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductService } from './product.service';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductResolverService } from './product-resolver.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProductRoutingModule
  ],
  declarations: [ProductListComponent, ProductDetailComponent, ProductEditComponent, ProductFilterPipe],
  providers: [ProductService, ProductResolverService]
})
export class ProductModule { }
