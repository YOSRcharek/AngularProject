import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from '../../components/product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterProductPipe } from 'src/app/pipe/filter-product.pipe';
import { FormProductComponent } from '../../components/form-product/form-product.component';
import { CardComponentComponent } from 'src/app/components/card-component/card-component.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ProductComponent, FilterProductPipe, FormProductComponent,CardComponentComponent],
  imports: [CommonModule, ProductRoutingModule, FormsModule,ReactiveFormsModule,SharedModule],
})
export class ProductModule {}
