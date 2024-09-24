import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/models/categories';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit {
category: any;

  constructor() { }

  ngOnInit(): void {
  }
  Alerte(description:string){
    alert(description);
  }
  titre:string="";
  get filterCateg(): Categorie[] {
    if (!this.titre) {
      return this.categories;
    }
    return this.categories.filter(category => 
      category.title.toLowerCase().includes(this.titre.toLowerCase())
    );
  }
  categories : Categorie[]=[
  {"id":1,"title":"Grand électroménager",
  "image":"assets/electro.jpg", "description":"Grand électroménager1 ",
  "available":true},
  {"id":2,"title":"Petit électroménager",
  "image":"assets/electro.jpg", "description":"Grand électroménager2",
  "available":true},
  {"id":3,"title":"Produits informatiques",
  "image":"assets/electro.jpg", "description":"Grand électroménager3",
  "available":true},
  {"id":4,"title":"Smart Phones", "image":"assets/electro.jpg",
  "description":"Grand électroménager4", "available":true},
  {"id":5,"title":"TV, images et son",
  "image":"assets/electro.jpg", "description":"Grand électroménager5",
  "available":true},
  {"id":6,"title":"Produits voiture", "image":"assets/electro.jpg",
  "description":"Grand électroménager6","available":false},
]

}