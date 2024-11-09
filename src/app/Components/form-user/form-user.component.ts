import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {

  constructor(private activated:ActivatedRoute) {}
  user: User = new User();
  users: User[] = []; 

  ngOnInit(): void {
    this.user= new User();
    this.activated.params.subscribe({
      next:(param)=>{
        if (param['obj']!=undefined){
          console.log(JSON.parse(param['obj']))
          this.user=JSON.parse(param['obj'])
        }
      }
    })
  }

  add(f: NgForm) {

    console.log(f);
  }

}
