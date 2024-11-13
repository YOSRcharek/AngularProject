import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Categorie } from 'src/app/models/categories';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }
  @Input() data!:Categorie;
  @Input({ required: true }) title!: string;
  //@Input({ alias: 't' }) title!: string;
  @Output() dataEmitter =new EventEmitter();
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }
  ngOnInit(): void {
  }
  DeleteChild() {
    this.dataEmitter.emit(this.data.id)
  }
}
