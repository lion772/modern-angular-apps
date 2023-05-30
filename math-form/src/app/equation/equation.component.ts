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
    [MathValidators.addition('answer', 'a', 'b')]
  );

  public context = {
    a: this.mathForm.get('a')?.value,
    b: this.mathForm.get('b')?.value,
  };

  public ngOnInit(): void {
    this.mathForm.statusChanges.subscribe({
      next: (value) => {
        if (value === 'INVALID') {
          return;
        }

        setTimeout(() => {
          this.mathForm.setValue({
            a: this.randomNumber(),
            b: this.randomNumber(),
            answer: '',
          });
        }, 500);
      },
    });
  }

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
