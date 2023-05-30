import { Directive, ElementRef, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appAnswerHighlight]',
})
export class AnswerHighlightDirective implements OnInit {
  public constructor(private el: ElementRef, private controlName: NgControl) {}

  public ngOnInit(): void {
    console.log(this.controlName.control);
    this.controlName.control?.parent;
  }
}
