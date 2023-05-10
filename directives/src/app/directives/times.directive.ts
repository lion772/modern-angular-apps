import {
  Directive,
  ElementRef,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appTimes]',
})
export class TimesDirective {
  @Input('appTimes')
  set render(times: number) {
    let index = 0;
    this.viewContainerRef.clear();
    do {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
      index++;
    } while (index < times);
  }

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}
}
