import { Component, Input } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() label!: string;
  @Input() control!: FormControl;
  @Input() inputType = 'text';
  @Input() controlType = 'input';

  public lengthNecessary(query: string): number {
    return Math.abs(
      this.errors?.[query]?.['requiredLength'] -
        this.errors?.[query]?.['actualLength'],
    );
  }

  public get errors(): ValidationErrors | null {
    return this.control.errors;
  }
}
