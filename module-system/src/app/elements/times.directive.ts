import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTimes]',
})
export class TimesDirective {
  @Input('appTimes')
  set times(num: number) {
    this.viewContainerRef.clear();
    for (let i = 0; i < num; i++) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}
}
