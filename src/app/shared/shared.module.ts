import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationMsgComponent } from '../components/validation-msg/validation-msg.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ValidationMsgComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[ValidationMsgComponent]
})
export class SharedModule { }
