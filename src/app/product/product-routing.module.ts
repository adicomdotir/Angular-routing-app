import { ProductEditTagsComponent } from './product-edit-tags/product-edit-tags.component';
import { ProductEditInfoComponent } from './product-edit-info/product-edit-info.component';
import { ProductResolverService } from './product-resolver.service';
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
    resolve: { product: ProductResolverService },
    children: [
      {
        path: '',
        redirectTo: 'info',
        pathMatch: 'full'
      },
      {
        path: 'info',
        component: ProductEditInfoComponent
      },
      {
        path: 'tags',
        component: ProductEditTagsComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
