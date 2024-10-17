import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, NgModel } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Categorie } from 'src/app/models/categories';

@Component({
  selector: 'app-form-categorie',
  templateUrl: './form-categorie.component.html',
  styleUrls: ['./form-categorie.component.css']
})
export class FormCategorieComponent implements OnInit {

  categorie: Categorie = new Categorie(); 
  
  constructor(private activated:ActivatedRoute) {}
  onSubmit() {
    if (this.categorie) {
      console.log('Form data:', this.categorie);
       }
  }
  add(f:NgForm,title:NgModel){
    this.categorie.available=true;
  console.log(f);
  console.log(title);
  }
  ngOnInit(): void {
    this.categorie = new Categorie();
    this.activated.params.subscribe({
      next:(param)=>{
        if (param['obj']!=undefined){
          console.log(JSON.parse(param['obj']))
          this.categorie=JSON.parse(param['obj'])
        }
      }
    })
  }

}
