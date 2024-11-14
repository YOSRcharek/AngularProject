import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Products } from 'src/app/models/products';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})
export class CardComponentComponent {
  @Input() data!: Products;


  @Output() buyEvent = new EventEmitter<number>();
  @Output() incrementEvent = new EventEmitter<number>();
  @Output() addToShortlistEvent = new EventEmitter<object>();

  buy() {
    this.buyEvent.emit(this.data.id); 
  }

  increment() {
    this.incrementEvent.emit(this.data.id);  
  }
  addToShortlist() {
    this.addToShortlistEvent.emit(this.data); 
  }
}
