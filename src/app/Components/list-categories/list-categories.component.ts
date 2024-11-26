import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Categorie } from 'src/app/models/categories';
import { TestComponent } from '../test/test.component';
import { CategoryComponent } from '../category/category.component';
import { CategoryserviceService } from 'src/app/services/categoryservice.service';
import { ConsumerService } from 'src/app/services/consumer.service';
import { Subscribable, Subscription } from 'rxjs';
@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit {
constructor(private router: Router,private categoryService:CategoryserviceService, private Consumer:ConsumerService) { }
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
  Subscribers!: Subscription;
 ngOnDestroy():void{
  this.Subscribers.unsubscribe();
  }
  ngOnInit(): void {
   // this.categories=this.categoryService.getCategories();
    this.Subscribers=this.Consumer.get<Categorie[]>('category').subscribe({
      next:(data)=>this.categories=data,
      error:(e)=>console.log(e),
      complete:()=>console.log("termier")
    });
  }
  Alerte(description:string){
    alert(description);
  }
  categories : Categorie[] = [];
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