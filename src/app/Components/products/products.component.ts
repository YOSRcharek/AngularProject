
   import { Component, OnInit } from '@angular/core';
   import { ActivatedRoute } from '@angular/router';
   import { Products } from 'src/app/models/products';
   
   @Component({
     selector: 'app-products',
     templateUrl: './products.component.html',
     styleUrls: ['./products.component.css']
   })
   export class ProductsComponent implements OnInit {
     id!: number;
     list: Products[] = [];
     
     listProducts: Products[] = [
       { "id": 1, "name": "Refrigérateur LG Inox", "image": "assets/images/refrigerateur-lg.jpg", "categoryId": 1, "description": "", "price": 2800, "brand": "LG", "promotion": 0 },
       { "id": 2, "name": "Refrigérateur Samsung Blanc", "image": "assets/images/refrigerateur_samsung.jpeg", "categoryId": 1, "description": "", "price": 2400, "brand": "Samsung", "promotion": 0 },
       { "id": 3, "name": "Lave vaisselle Beko", "image": "assets/images/lave_vaisselle.png", "categoryId": 1, "description": "", "price": 1875, "brand": "BEKO", "promotion": 0 },
       { "id": 4, "name": "Oppo Smart Phone", "image": "assets/images/oppo_smart.jpg", "categoryId": 4, "description": "", "price": 1200, "brand": "OPPO", "promotion": 0 },
       { "id": 5, "name": "Hachoir", "image": "assets/images/hachoir.jpg", "categoryId": 2, "description": "", "price": 120, "brand": "Moulinex", "promotion": 0 },
       { "id": 6, "name": "TV 50'' LG", "image": "assets/images/tv_lg.jpg", "categoryId": 5, "description": "", "price": 1800, "brand": "LG", "promotion": 0 },
     ];
   
     constructor(private activated :ActivatedRoute) {
      //this.id=this.activated.snapshot.params['id'];
      console.log("with snapshot");
      console.log(this.activated.snapshot.params['id']);
      console.log("with params ");
      this.activated.params.subscribe({
        next: (param)=>console.log(param['id'])
      })
      console.log("with paramMap");
  
    this.activated.paramMap.subscribe({
        next: (p)=>console.log(p.get('id'))
      })
     }
   
     ngOnInit() {
       // Utilisation d'un seul abonnement pour récupérer l'id
       this.activated.paramMap.subscribe(res => {
         this.id = Number(res.get('id'));
         // Filtrer les produits après avoir obtenu l'id
         this.list = this.listProducts.filter(p => p.categoryId === this.id);
         console.log(this.list); // Pour vérifier le contenu de la liste filtrée
       });
     }
   }
   