import {
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit, OnDestroy {
  @Output() public closeModalEmit = new EventEmitter<boolean>();

  public constructor(private elementRef: ElementRef) {}

  public ngOnInit(): void {
    document.body.appendChild(this.elementRef.nativeElement);
  }

  public onCloseClick(): void {
    this.closeModalEmit.emit(false);
  }

  ngOnDestroy(): void {
    this.elementRef.nativeElement.remove();
  }
}
