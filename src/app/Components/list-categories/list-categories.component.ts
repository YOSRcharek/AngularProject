import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Categorie } from 'src/app/models/categories';
import { TestComponent } from '../test/test.component';
import { CategoryComponent } from '../category/category.component';
@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit {
constructor(private router: Router) { }
@ViewChild('child') testComponent!:TestComponent;
@ViewChild('i') input!:HTMLInputElement;
@ViewChildren(CategoryComponent)children!:QueryList<CategoryComponent>;

ngAfterViewInit():void
{
  this.testComponent.start();
  console.log(this.testComponent.test)
  console.log(this.input)
  this.children.forEach((e)=> console.log(e));
} 
  ngOnInit(): void {
  }
  Alerte(description:string){
    alert(description);
  }
  titre:string="";
  test: string = '10';
  get filterCateg(): Categorie[] {
    if (!this.titre) {
      return this.categories;
    }
    return this.categories.filter(category => 
      category.title.toLowerCase().includes(this.titre.toLowerCase())
    );
  }
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
    
    changeTest() {
      this.test = '12';
    }
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

     DeleteChild(event: any): void {
        const categoryId = event; 
      this.categories = this.categories.filter((c) => c.id !== categoryId);
      console.log(`Catégorie avec l'ID ${categoryId} supprimée`);
    }
    
}