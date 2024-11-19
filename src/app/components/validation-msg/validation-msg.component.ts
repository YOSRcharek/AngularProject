import { Component, Input } from '@angular/core';
import { AbstractControl, NgModel, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-validation-msg',
  templateUrl: './validation-msg.component.html',
  styleUrls: ['./validation-msg.component.css']
})
export class ValidationMsgComponent {
//  @Input() control!: AbstractControl | null;
  @Input() control!: NgModel | AbstractControl | null; // Accepter NgModel ou AbstractControl.
  @Input() customMessages: { [key: string]: string } = {};

  get errorMessage(): string | null {
    if (this.control && this.control.errors && (this.control.touched || this.control.dirty)) {
      const errors: ValidationErrors = this.control.errors;
      for (const errorKey in errors) {
        if (this.customMessages[errorKey]) {
          return this.customMessages[errorKey];
        }
      }
    }
    return null;
  }
}
