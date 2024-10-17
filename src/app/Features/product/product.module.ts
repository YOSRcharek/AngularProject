import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ProductsComponent } from 'src/app/Components/products/products.component';
import { ProductRoutingModule } from './product-routing.module';
import { FilterProductPipe } from 'src/app/pipe/filter-product.pipe';

@NgModule({
  declarations: [
    ProductsComponent,
    FilterProductPipe
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule
  ]
})
export class ProductModule { }