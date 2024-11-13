import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})

export class FormProductComponent implements OnInit {
    /* Declaration de FormBuilder*/
constructor(private fb:FormBuilder){}
  product!: FormGroup;
  search!: FormControl;
 /* ngOnInit() {
    this.product= new FormGroup({
      name : new FormControl("Test",[Validators.required]),
      Image : new FormControl(),
      description : new FormControl(),
      price : new FormControl(),
      brand : new FormGroup({
        name: new FormControl(),
        logo: new FormControl()
      }),
      promotion : new FormControl(),
      quantity : new FormControl(),
      nb_likes : new FormControl({value: '0', disabled: true}),
      tags : new FormArray([new FormControl()])
    })*/

    /* Form Avec FormBuilder*/
    ngOnInit() {
    this.product= this.fb.group({
      name : ["",[Validators.required]],
      Image : [],
      description : [],
      price : [],
      brand : this.fb.group({
        name:["",[Validators.minLength(3),Validators.required]],
        logo: []
      }),
      promotion : [],
      quantity : [],
      nb_likes : [{values:0,disabled:true}],
      tags : this.fb.array([])
    })
}
get tags() : FormControl[]{
  return (this.product.get('tags') as FormArray)!.controls as FormControl[]
}
get name() {
  return this.product.get('name') as FormControl
}
get brandName() {
  return this.product.get('brand')!.get('name') as FormControl
}

addTags(){
  this.tags.push(new FormControl());
}

submit(){
  console.log(this.product.get('name'))
  console.log(this.product.get('brand')!.get('name'))
  console.log(this.product.getRawValue)

}

}
