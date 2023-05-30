import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MathValidators } from '../math-validators';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.scss'],
})
export class EquationComponent implements OnInit {
  public mathForm = new FormGroup(
    {
      a: new FormControl(this.randomNumber()),
      b: new FormControl(this.randomNumber()),
      answer: new FormControl('', [Validators.required]),
    },
    [MathValidators.addition]
  );

  public context = {
    a: this.mathForm.get('a')?.value,
    b: this.mathForm.get('b')?.value,
  };

  ngOnInit(): void {}

  public randomNumber(): number {
    return Math.floor(Math.random() * 10);
  }

  public get a(): number | null | undefined {
    return this.mathForm.value.a;
  }

  public get b(): number | null | undefined {
    return this.mathForm.value.b;
  }
}
