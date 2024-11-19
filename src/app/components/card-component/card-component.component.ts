import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})
export class CardComponentComponent {
  @Input() data!: Product;


  @Output() buyEvent = new EventEmitter<number>();
  @Output() incrementEvent = new EventEmitter<number>();

  buy() {
    this.buyEvent.emit(this.data.id); 
  }

  increment() {
    this.incrementEvent.emit(this.data.id);  
  }
}
