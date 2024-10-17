import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Console } from 'console';
import { Categorie } from 'src/app/models/categories';
@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit {
category: any;

  constructor(private router: Router) { }

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
  categories : Categorie[] = [{"id":1,"title":"Grand électroménager",
    "image":"assets/electro.jpg", "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    "available":true},
    {"id":2,"title":"Petit électroménager",
    "image":"assets/electro.jpg", "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    "available":true},
    {"id":3,"title":"Produits informatiques",
    "image":"assets/electro.jpg", "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    "available":true},
    {"id":4,"title":"Smart Phones", "image":"assets/electro.jpg",
    "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "available":true},
    {"id":5,"title":"TV, images et son",
    "image":"assets/electro.jpg", "description":"",
    "available":true},
    {"id":6,"title":"Produits voiture", "image":"assets/electro.jpg",
    "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.","available":false},]
    
    afficheDescription(id:number){
      this.categories.forEach(element => {
        if (element.id == id) {
          alert(element.description)
        }
      })
    }
    update(c:Categorie){
    console.log(JSON.stringify(c))
    this.router.navigate(['/category/update', JSON.stringify(c)]); 
    }
}