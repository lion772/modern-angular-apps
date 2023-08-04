import { Directive, ElementRef, HostBinding, Input } from "@angular/core";

@Directive({
  selector: "[highlighted]",
})
export class HighlightedDirective {
  @Input("highlighted")
  isHighlighted = false;

  @HostBinding("class.highlighted")
  get cssClasses() {
    return this.isHighlighted;
  }
}
