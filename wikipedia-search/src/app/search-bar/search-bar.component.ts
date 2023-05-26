import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  public term = '';
  @Output() termEmitter = new EventEmitter<string>();

  public onInput(e: any) {
    if (e.target.value) {
      this.term = e.target.value;
    }
  }

  public onSubmitForm(e: any) {
    e.preventDefault();
    this.termEmitter.emit(this.term);
  }
}
