import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MathValidators } from '../math-validators';
import { delay, filter, scan } from 'rxjs';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.scss'],
})
export class EquationComponent implements OnInit {
  public secondsPerSolution = 0;
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
        delay(100),
        scan(
          (acc: { numberSolved: number; startTime: any }) => ({
            ...acc,
            numberSolved: acc.numberSolved + 1,
          }),
          { numberSolved: 0, startTime: new Date() }
        )
      )
      .subscribe({
        next: ({ numberSolved, startTime }) => {
          this.secondsPerSolution =
            (new Date().getTime() - startTime.getTime()) / numberSolved / 1000;
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
