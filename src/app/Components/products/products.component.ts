
   import { Component, OnInit } from '@angular/core';
   import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/models/products';
import { CategoryserviceService } from 'src/app/services/categoryservice.service';
import { __param } from 'tslib';

   @Component({
     selector: 'app-products',
     templateUrl: './products.component.html',
     styleUrls: ['./products.component.css']
   })
   export class ProductsComponent implements OnInit {
      id!:number;
    
    search:string="";
    ngOnInit(): void {
      throw new Error('Method not implemented.');
      this.listProducts=this.categoryService.getProduits();
    }
    constructor(private activated:ActivatedRoute,private categoryService:CategoryserviceService) {

    this.id = this.activated.snapshot.params['id'];
    console.log('snapshot method :')
    console.log(this.activated.snapshot.params['id']);
    
    console.log('params :')
    this.activated.params.subscribe({
      next : (param)=>console.log(param['id'])
    })
    
    this.listProducts = this.listProducts.filter((pr)=>pr.categoryId == this.id);
    }
    
    
    increment(event: any) {
      const productId = event; 
      const product = this.listProducts.find((p) => p.id === productId);
      
      if (product) {
        product.nb_likes++; 
      } 
    }
    
    buy(event: any) {
      const productId = event; 
      const product = this.listProducts.find((p) => p.id === productId);     
      if (product && product.quantity > 0) {
        product.quantity--; 
      } 
    }
    shortList: Products[] = [];  

  addToShortlist(event: any) {
    const idUser = 123;  
    const productWithUser = { ...event, idUser }; 
    this.shortList.push(productWithUser);  
    console.log(this.shortList);
  }
    listProducts : Products[]=[];
    }