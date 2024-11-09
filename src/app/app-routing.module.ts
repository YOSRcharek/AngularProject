import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ProductsComponent } from './Components/products/products.component';
import { FormCategorieComponent } from './Components/form-categorie/form-categorie.component';


const routes:Routes=[
  { path: "home", component: HomeComponent },
  {path:"", redirectTo:'/home', pathMatch: 'full'},// pathMatch comparaison complete 
  {path:"category/add",component:FormCategorieComponent},
  {path:"category/update/:obj",component:FormCategorieComponent},
  
  { path:'products', loadChildren: () => 
    import ('./Features/product/product.module')
    .then((m) => m.ProductModule)
  },
  
  { path:'apropos', loadChildren: () => 
    import ('./Features/apropos/apropos.module')
    .then((m) => m.AproposModule)
  },
  { path:'contact', loadChildren: () => 
    import ('./Features/contact/contact.module')
    .then((m) => m.ContactModule)
  },
  { path:'profile', loadChildren: () => 
    import ('./Features/profile/profile.module')
    .then((m) => m.ProfileModule)
  },
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
