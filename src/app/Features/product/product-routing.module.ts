import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormProductComponent } from 'src/app/Components/form-product/form-product.component';
import { ProductsComponent } from 'src/app/Components/products/products.component';

const routes: Routes = [
  {path: 'add' , component: FormProductComponent},
  {path: ':id' , component: ProductsComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
