import { Directive, ElementRef, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { map } from 'rxjs';

@Directive({
  selector: '[appAnswerHighlight]',
})
export class AnswerHighlightDirective implements OnInit {
  public constructor(private el: ElementRef, private controlName: NgControl) {}

  public ngOnInit(): void {
    console.log(this.controlName.control);
    this.controlName.control?.parent?.valueChanges
      .pipe(map(({ a, b, answer }) => Math.abs((a + b - answer) / (a + b)))) //if result is closer to 0.2 of the correct answer
      .subscribe({
        next: (value) => {
          if (value === 0) {
            this.el.nativeElement.classList.remove('close');
          } else if (value < 0.2) {
            this.el.nativeElement.classList.add('close');
          } else {
            this.el.nativeElement.classList.remove('close');
          }
        },
      });
  }
}
