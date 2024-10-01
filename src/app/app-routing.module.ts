import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ProductModule } from './Features/product/product.module';
import { ProductsComponent } from './Components/products/products.component';


const routes:Routes=[
  { path: "home", component: HomeComponent },
  {path:"", redirectTo:'/home', pathMatch: 'full'},
  {path:"products/:id",component:ProductsComponent},
  { path: "**", component: NotFoundComponent } ,
 
];
/* {path:"products",component:ProductsComponent, children:[*
    {path:":id", component:ProductsComponent},
  ]},*/
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
