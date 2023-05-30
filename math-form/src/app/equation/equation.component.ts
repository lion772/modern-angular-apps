import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MathValidators } from '../math-validators';
import { delay, filter } from 'rxjs';

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
    this.mathForm.statusChanges
      .pipe(
        filter((res) => res === 'VALID'),
        delay(100)
      )
      .subscribe({
        next: () => {
          this.mathForm.setValue({
            a: this.randomNumber(),
            b: this.randomNumber(),
            answer: '',
          });
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
