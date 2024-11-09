import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from 'src/app/Components/products/products.component';
import { ProductRoutingModule } from './product-routing.module';
import { FilterProductPipe } from 'src/app/pipe/filter-product.pipe';
import { FormProductComponent } from '../../Components/form-product/form-product.component';

@NgModule({
  declarations: [
    ProductsComponent,
    FilterProductPipe,
    FormProductComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }