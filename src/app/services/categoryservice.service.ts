import { Injectable } from '@angular/core';
import { Categorie } from '../models/categories';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class CategoryserviceService {

  constructor() { }
  categories : Categorie[] = [{"id":1,"title":"Grand électroménager",
    "image":"assets/1.png", "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    "available":true},
    {"id":2,"title":"Petit électroménager",
    "image":"assets/2.png", "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    "available":true},
    {"id":3,"title":"Produits informatiques",
    "image":"assets/3.png", "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    "available":true},
    {"id":4,"title":"Smart Phones", "image":"assets/4.png",
    "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "available":true},
    {"id":5,"title":"TV, images et son",
    "image":"assets/6.png", "description":"",
    "available":true},
    {"id":6,"title":"Produits voiture", "image":"assets/5.png",
    "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.","available":false},]
    getCategories(){
      return this.categories;
    }
    addCategories(categorie:Categorie){
       this.categories.push(categorie);
    }
    listProducts : Products[]=[
      {"id":1, "name":"Refrigérateur LG Inox","image":"assets/refr.jpg","categoryId":1, "description":"","price":2800,"brand":"LG","promotion":0,"nb_likes":0,"quantity":10},
      {"id":2, "name":"Refrigérateur Samsung Blanc","image":"assets/ref.jpg","categoryId":1, "description":"", "price":2400,"brand":"Samsung","promotion":0,"nb_likes":0,"quantity":10},
      {"id":3, "name":"Lave vaisselle Beko", "image":"assets/lave.jpg", "categoryId":1, "description":"","price":1875,"brand":"BEKO", "promotion":0,"nb_likes":0,"quantity":10},
      {"id":4, "name":"Oppo Smart Phone","image":"assets/op.jpg","categoryId":4, "description":"", "price":1200,"brand":"OPPO","promotion":0,"nb_likes":0,"quantity":10},
      {"id":5, "name":"Hachoir", "image":"assets/hach.jpg","categoryId":2, "description":"","price":120,"brand":"Moulinex", "promotion":0,"nb_likes":0,"quantity":10},
      {"id":6, "name":"TV 50'' LG","image":"assets/tv.jpg","categoryId":5, "description":"", "price":1800,"brand":"LG","promotion":0,"nb_likes":0,"quantity":10},
    ]
    getProduits(){
      return this.listProducts;
    }
    addProduits(Produit:Products){
       this.listProducts.push(Produit);
    }
}
