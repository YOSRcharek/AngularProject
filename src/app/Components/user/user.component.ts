import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  acheter(){
 this.quantite--
  }
  titre:string='hello';
   blue:string='blue';
  person ={
    id:1,
    name:'test',
    age:20
  }
  quantite=4;
  imagesrc="/assets/img1.png";
  height=120;
  width=100;
  onInputChange(event:Event){
   const color=event.target as HTMLInputElement
   this.blue=color.value;
  }

}
