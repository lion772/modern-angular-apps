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
    required: '',
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
      minlength: `${this.minLengthNecessary(
        'minlength'
      )} character(s) are missing`,
      maxlength: `You have ${this.minLengthNecessary(
        'maxlength'
      )} letter(s) more than the limit`,
    };
  }

  public showErrors(): boolean {
    const { invalid, touched } = this.control;
    return invalid && touched;
  }

  public minLengthNecessary(query: string): number {
    return Math.abs(
      this.control.errors?.[query]?.['requiredLength'] -
        this.control.errors?.[query]?.['actualLength']
    );
  }
}
