
   import { Component, OnInit } from '@angular/core';
   import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/models/products';
import { __param } from 'tslib';

   @Component({
     selector: 'app-products',
     templateUrl: './products.component.html',
     styleUrls: ['./products.component.css']
   })
   export class ProductsComponent  {
      id!:number;
      listProducts : Products[]=[
        {"id":1, "name":"Refrigérateur LG Inox","image":"assets/refr.jpg","categoryId":1, "description":"","price":2800,"brand":"LG","promotion":0,"nb_likes":0,"quantity":10},
        {"id":2, "name":"Refrigérateur Samsung Blanc","image":"assets/ref.jpg","categoryId":1, "description":"", "price":2400,"brand":"Samsung","promotion":0,"nb_likes":0,"quantity":10},
        {"id":3, "name":"Lave vaisselle Beko", "image":"assets/lave.jpg", "categoryId":1, "description":"","price":1875,"brand":"BEKO", "promotion":0,"nb_likes":0,"quantity":10},
        {"id":4, "name":"Oppo Smart Phone","image":"assets/op.jpg","categoryId":4, "description":"", "price":1200,"brand":"OPPO","promotion":0,"nb_likes":0,"quantity":10},
        {"id":5, "name":"Hachoir", "image":"assets/hach.jpg","categoryId":2, "description":"","price":120,"brand":"Moulinex", "promotion":0,"nb_likes":0,"quantity":10},
        {"id":6, "name":"TV 50'' LG","image":"assets/tv.jpg","categoryId":5, "description":"", "price":1800,"brand":"LG","promotion":0,"nb_likes":0,"quantity":10},
      ]
    search:string="";
    
    constructor(private activated:ActivatedRoute) {
      
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
    
    }