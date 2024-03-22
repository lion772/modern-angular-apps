import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  OnDestroy,
  Output,
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmailFormComponent } from 'src/app/inbox/email-form/email-form.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent
  implements AfterContentInit, AfterContentInit, OnDestroy
{
  @Output() dismiss = new EventEmitter();
  @ContentChild(EmailFormComponent) formComponent!: EmailFormComponent;

  public constructor(
    private elementRef: ElementRef,
    private _snackBar: MatSnackBar,
  ) {}

  ngAfterContentInit(): void {
    document.body.appendChild(this.elementRef.nativeElement);
  }

  onDismissClick() {
    console.log(this.formComponent.emailFormNotEmpty);
    this.dismiss.emit(this.formComponent.emailFormNotEmpty);
    this.formComponent.emailFormNotEmpty && this._snackBar.open('You have unsaved changes!', 'DISCARD');
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
