import {
  AfterContentInit,
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements AfterContentInit, OnDestroy {
  @Output() dismiss = new EventEmitter();

  public constructor(private elementRef: ElementRef) {}

  ngAfterContentInit(): void {
    console.log(this.elementRef.nativeElement)
    document.body.appendChild(this.elementRef.nativeElement);
  }

  onDismissClick() {
    this.dismiss.emit();
  }

  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === 'Space') {
      this.onDismissClick();
      event.preventDefault();
    }
  }

  ngOnDestroy(): void {
    this.elementRef.nativeElement.remove();
  }
}
