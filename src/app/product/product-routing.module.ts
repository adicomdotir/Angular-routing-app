import { ProductResolverService } from './product-resover.service';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { 
    path: 'products/:id', component: ProductDetailComponent,
    resolve: { product: ProductResolverService }  
  },
  { 
    path: 'products/:id/edit', component: ProductEditComponent,
    resolve: { product: ProductResolverService }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
