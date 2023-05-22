import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() control!: FormControl;
  @Input() controlName!: string;
  @Input() validators: string[] = [];
  @Input() inputType = 'text';
  public validatorsObj: { [key: string]: string } = {
    required: `This ${this.controlName} must be filled!`,
    minlength: '',
    maxlength: '',
  };

  public constructor() {}

  public ngOnInit(): void {
    this.validatorsObj = {
      ...this.validatorsObj,
      required: `The ${this.controlName} field must be filled!`,
    };
  }

  public onInput() {
    this.validatorsObj = {
      ...this.validatorsObj,
      minlength: `${Math.abs(
        this.control.errors?.['minlength']?.['requiredLength'] -
          this.control.errors?.['minlength']?.['actualLength']
      )} character(s) are missing`,
      maxlength: `You have ${Math.abs(
        this.control.errors?.['maxlength']?.['requiredLength'] -
          this.control.errors?.['maxlength']?.['actualLength']
      )} letter(s) more than the limit`,
    };
  }
}
